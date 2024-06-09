import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Select, MenuItem, Typography } from '@mui/material';

export default function ViewTickets() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [filterBoxVisible, setFilterBoxVisible] = useState(false);
  const [filters, setFilters] = useState({
    priority: '',
    department: '',
    type: '',
    subject: '',
    search: '',
  });

  const [priorities, setPriorities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    // Fetch tickets from the backend API
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tickets');
        const data = await response.json();
        setTickets(data);
        setFilteredTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const [priorityRes, departmentRes, typeRes] = await Promise.all([
        fetch('http://localhost:3000/api/categories/priority'),
        fetch('http://localhost:3000/api/categories/department'),
        fetch('http://localhost:3000/api/categories/type'),
      ]);

      const [priorityData, departmentData, typeData] = await Promise.all([
        priorityRes.json(),
        departmentRes.json(),
        typeRes.json(),
      ]);

      setPriorities(priorityData);
      setDepartments(departmentData);
      setTypes(typeData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    // Apply filters whenever they change
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = tickets;

    if (filters.priority) {
      filtered = filtered.filter(ticket => ticket.priority === filters.priority);
    }

    if (filters.department) {
      filtered = filtered.filter(ticket => ticket.department === filters.department);
    }

    if (filters.type) {
      filtered = filtered.filter(ticket => ticket.type === filters.type);
    }

    if (filters.subject) {
      filtered = filtered.filter(ticket => ticket.subject.includes(filters.subject));
    }

    if (filters.search) {
      filtered = filtered.filter(ticket => 
        ticket.title.includes(filters.search) || 
        ticket.description.includes(filters.search)
      );
    }

    setFilteredTickets(filtered);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Button onClick={() => setFilterBoxVisible(!filterBoxVisible)}>
        {filterBoxVisible ? 'Hide Filters' : 'Show Filters'}
      </Button>

      {filterBoxVisible && (
        <Box>
          <TextField
            label="Search"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            fullWidth
          />

          <Select
            label="Priority"
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
            fullWidth
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {priorities.map(priority => (
              <MenuItem key={priority} value={priority}>{priority}</MenuItem>
            ))}
          </Select>

          <Select
            label="Department"
            name="department"
            value={filters.department}
            onChange={handleFilterChange}
            fullWidth
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {departments.map(department => (
              <MenuItem key={department} value={department}>{department}</MenuItem>
            ))}
          </Select>

          <Select
            label="Type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            fullWidth
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {types.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>

          <TextField
            label="Subject"
            name="subject"
            value={filters.subject}
            onChange={handleFilterChange}
            fullWidth
          />
        </Box>
      )}

      <Box>
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => (
            <Box key={ticket.id} mb={2} p={2} border="1px solid #ccc">
              <Typography variant="h6">{ticket.title}</Typography>
              <Typography>{ticket.description}</Typography>
              <Typography>Priority: {ticket.priority}</Typography>
              <Typography>Department: {ticket.department}</Typography>
              <Typography>Type: {ticket.type}</Typography>
              <Typography>Subject: {ticket.subject}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No tickets found.</Typography>
        )}
      </Box>
    </Box>
  );
}
