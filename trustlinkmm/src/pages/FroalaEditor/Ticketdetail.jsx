import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import processHtmlContent from './processHtmlContent';

const TicketDetail = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const token = localStorage.getItem('token');
                const api = import.meta.env.VITE_API_URL;
                const res = await fetch(`${api}/api/tickets/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    setTicket(data);
                } else {
                    throw new Error('Failed to fetch ticket');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchTicket();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!ticket) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{ticket.title}</h1>
            <div>
                {ticket.description && processHtmlContent(ticket.description)}
            </div>
            <p><strong>Category:</strong> {ticket.categoryId}</p>
            <p><strong>Department:</strong> {ticket.departmentId}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Submitted By:</strong> {ticket.issuerId}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p><strong>Submitted Date:</strong> {new Date(ticket.submittedDate).toLocaleString()}</p>
        </div>
    );
};

export default TicketDetail;
