import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Select, MenuItem, FormControl, InputLabel, Grid, Alert } from "@mui/material";

const DepartmentSelectForm = () => {
  const [departments, setDepartments] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [ticketCategories, setTicketCategories] = useState([]);
  
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedTicketCategory, setSelectedTicketCategory] = useState("");
  
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [departmentsResponse, prioritiesResponse, ticketCategoriesResponse] = await Promise.all([
          fetch('/api/departments'),
          fetch('/api/priorities'),
          fetch('/api/ticket-categories')
        ]);

        if (!departmentsResponse.ok || !prioritiesResponse.ok || !ticketCategoriesResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const departmentsData = await departmentsResponse.json();
        const prioritiesData = await prioritiesResponse.json();
        const ticketCategoriesData = await ticketCategoriesResponse.json();

        setDepartments(departmentsData);
        setPriorities(prioritiesData);
        setTicketCategories(ticketCategoriesData);

        if (departmentsData.length > 0) setSelectedDepartment(departmentsData[0].id);
        if (prioritiesData.length > 0) setSelectedPriority(prioritiesData[0].id);
        if (ticketCategoriesData.length > 0) setSelectedTicketCategory(ticketCategoriesData[0].id);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleTicketCategoryChange = (event) => {
    setSelectedTicketCategory(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6">Select Options</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="department-select-label">Department</InputLabel>
        <Select
          labelId="department-select-label"
          id="department-select"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
          label="Department"
        >
          {departments.map((department) => (
            <MenuItem key={department.id} value={department.id}>
              {department.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="priority-select-label">Priority</InputLabel>
        <Select
          labelId="priority-select-label"
          id="priority-select"
          value={selectedPriority}
          onChange={handlePriorityChange}
          label="Priority"
        >
          {priorities.map((priority) => (
            <MenuItem key={priority.id} value={priority.id}>
              {priority.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="ticket-category-select-label">Ticket Category</InputLabel>
        <Select
          labelId="ticket-category-select-label"
          id="ticket-category-select"
          value={selectedTicketCategory}
          onChange={handleTicketCategoryChange}
          label="Ticket Category"
        >
          {ticketCategories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default DepartmentSelectForm;
