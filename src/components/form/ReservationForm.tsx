"use client"
import { useRef, useState } from 'react';
import CustomSelect from '../select/CustomSelect';
import ReactDatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale/es';
import { toast } from 'react-toastify';

// Registrar el locale en español
registerLocale('es', es);

interface DataType {
    btnClass?: string;
}

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ReservationForm = ({ btnClass }: DataType) => {

    const personOptions = [
        { value: '1', label: '1 Persona' },
        { value: '2', label: '2 Personas' },
        { value: '3', label: '3 Personas' },
        { value: '4', label: '4 Personas' },
        { value: '5', label: '5 Personas' },
    ]

    const scheduleOptions = [
        { value: '10', label: '10:00 AM' },
        { value: '11', label: '11:00 AM' },
        { value: '12', label: '12:00 PM' },
        { value: '1', label: '1:00 PM' },
        { value: '2', label: '2:00 PM' },
    ]

    const [phone, setPhone] = useState('');
    const [selectedPersons, setSelectedPersons] = useState<{ value: string | number; label: string }>(personOptions[2]); // Default: 3 Personas
    const [selectedTime, setSelectedTime] = useState<{ value: string | number; label: string }>(scheduleOptions[2]); // Default: 12:00 PM
    const [startDate, setStartDate] = useState<Date | null>(null);
    const datePickerRef = useRef<ReactDatePicker | null>(null);

    const handleBooking: FormEventHandler = (event) => {
        event.preventDefault();
        
        // Validar que todos los campos estén completos
        if (!phone || !startDate) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        // Formatear la fecha
        const formattedDate = startDate ? startDate.toLocaleDateString('es-UY', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : '';

        // Construir el mensaje de WhatsApp
        const message = `¡Hola! Me gustaría hacer una reserva:

📞 Teléfono: ${phone}
👥 Personas: ${selectedPersons.label}
📅 Fecha: ${formattedDate}
🕐 Hora: ${selectedTime.label}

Gracias!`;

        // Número de WhatsApp de PanZ (formato internacional sin +)
        const whatsappNumber = '59891285003';
        
        // Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(message);
        
        // Construir la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp en una nueva ventana
        window.open(whatsappUrl, '_blank');
        
        toast.success("Redirigiendo a WhatsApp...");
    }

    return (
        <>
            <form onSubmit={handleBooking} className='with-label'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input 
                                className="form-control" 
                                id="phone" 
                                name="phone" 
                                placeholder="+598 91285003" 
                                type="text" 
                                autoComplete='off' 
                                required 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="subject">Personas</label>
                            <CustomSelect 
                                options={personOptions} 
                                selectValue={2} 
                                onChange={(option) => setSelectedPersons(option)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group date date-picker-one">
                            <label htmlFor="date">Fecha</label>
                            <ReactDatePicker
                                id='schedule'
                                selected={startDate}
                                onChange={(date: Date | null) => setStartDate(date)}
                                placeholderText="Selecciona una fecha"
                                ref={datePickerRef}
                                required
                                locale="es"
                                dateFormat="dd/MM/yyyy"
                            />
                            <span
                                className="input-group-addon"
                                onClick={() => datePickerRef.current?.setFocus()}
                            >
                                <i className="fas fa-calendar-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="time">Hora</label>
                            <CustomSelect 
                                options={scheduleOptions} 
                                selectValue={2} 
                                onChange={(option) => setSelectedTime(option)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit" className={`${btnClass}`}>
                            Reservar Mesa
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ReservationForm;