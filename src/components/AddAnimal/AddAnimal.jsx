import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function AddAnimal() {
    // Create variable to allow access
    // to useHistory module from react
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [animalToAdd, setAnimalToAdd] = useState({
        species_name: '',
        class_name: ''

    })

    const className = {
        Mammal: 1,
        Bird: 2,
        Fish: 3,
        Reptile: 4,
        Amphibian: 5,
    }

    const postNewAnimal = () => {
        dispatch({
            type: 'ADD_NEW_ANIMAL', payload: animalToAdd
        })
        history.push('/');
    }

    return (
        <>
            <Box component="form" className="animal-form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '15rem' },
                    color: 'text.primary'
                }}
                noValidate
                autoComplete="off">
                <div className="addAnimal">
                    <FormControl >
                        <h2>Add Animal:</h2>
                        <TextField
                            required
                            id="species-name"
                            label="Species Name"
                            onChange={(event) => setAnimalToAdd({ ...animalToAdd, species_name: event.target.value })}
                            value={animalToAdd.species_name}
                        /> 
                    </FormControl> <br />
                    <FormControl sx={{ m: 1, width: '15rem' }}>
                        <InputLabel id="genre-select-label">Class Name</InputLabel>
                        <Select
                            labelId="genre-simple-select-label"
                            id="genre-simple-select"
                            value={animalToAdd.class_name}
                            label="Genre"
                            onChange={(event) => setAnimalToAdd({ ...animalToAdd, class_name: event.target.value })}
                        >
                            <MenuItem value={className.mammal}>Mammal</MenuItem>
                            <MenuItem value={className.bird}>Bird</MenuItem>
                            <MenuItem value={className.fish}>Fish</MenuItem>
                            <MenuItem value={className.Reptile}>Reptile</MenuItem>
                            <MenuItem value={className.Amphibian}>Amphibian</MenuItem>
                        </Select>
                    </FormControl>
                </div> <br />
                <Button onClick={(event) => history.push('/')}>Back to list</Button>
                <Button onClick={(event) => postNewAnimal()}>Add Animal</Button>
            </Box>

        </>
    );
}

export default AddAnimal;