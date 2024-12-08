const express = require('express');
const app = express();
const PORT = 4321;
const cors = require('cors');
app.use(cors('http://localhost:3000'));



const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'Dhruvs-MacBook-Pro-3.local',  // Replace with your MySQL server host
  socketPath: '/tmp/mysql.sock',       // Replace with the path to your MySQL socket
  user: 'root',                       // Replace with your MySQL username
  password: 'localhostPassword',      // Replace with your MySQL password
  database: 'business_supply',        // Replace with your database name
  port: 3306                          // Use the correct port number if necessary
});

// Open the connection
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + db.threadId);
});






// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/driver_view', (req, res) => {
    console.log("accessed driver")
    const query = 'SELECT * FROM display_driver_view'; // Replace with your actual view name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from view:', err.stack);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.json(results); // Return the results as JSON
    });

});

app.get('/employee_view', (req, res) => {
    console.log("accessed employee")
    const query = 'SELECT * FROM display_employee_view'; // Replace with your actual view name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from view:', err.stack);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.json(results); // Return the results as JSON
    });
});

app.get('/location_view', (req, res) => {
    console.log("accessed location")
    const query = 'SELECT * FROM display_location_view'; // Replace with your actual view name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from view:', err.stack);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.json(results); // Return the results as JSON
    });
});

app.get('/owner_view', (req, res) => {
    console.log("accessed owner")
    const query = 'SELECT * FROM display_owner_view'; // Replace with your actual view name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from view:', err.stack);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.json(results); // Return the results as JSON
    });
});

app.get('/product_view', (req, res) => {
    console.log("accessed product")
    const query = 'SELECT * FROM display_product_view'; // Replace with your actual view name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from view:', err.stack);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.json(results); // Return the results as JSON
    });
});

app.get('/service_view', (req, res) => {
    console.log("accessed service")
    const query = 'SELECT * FROM display_service_view'; // Replace with your actual view name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from view:', err.stack);
            return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }
        res.json(results); // Return the results as JSON
    });
});

app.post('/add_business', (req, res) => {
    const { ip_long_name, ip_rating, ip_spent, ip_location } = req.body;

    if (!ip_long_name || !ip_rating || !ip_spent || !ip_location) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_business(?, ?, ?, ?)';
    const params = [ip_long_name, ip_rating, ip_spent, ip_location];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add business to the database' });
        }
        res.json({ message: 'business added successfully', results });
    });
});


app.post('/add_driver', (req, res) => {
    const { ip_username, ip_licenseID, ip_license_type, ip_driver_experience } = req.body;

    if (!ip_username || !ip_licenseID || !ip_license_type || !ip_driver_experience) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_driver_role(?, ?, ?, ?)';
    const params = [ip_username, ip_licenseID, ip_license_type, ip_driver_experience];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add driver to the database' });
        }
        res.json({ message: 'Driver added successfully', results });
    });
});
app.post('/add_employee', (req, res) => {
    const { 
        ip_username, 
        ip_first_name, 
        ip_last_name, 
        ip_address, 
        ip_birthdate, 
        ip_taxID, 
        ip_hired, 
        ip_employee_experience, 
        ip_salary 
    } = req.body;

    // Validate input fields
    if (
        !ip_username || 
        !ip_first_name || 
        !ip_last_name || 
        !ip_address || 
        !ip_birthdate || 
        !ip_taxID || 
        !ip_hired || 
        !ip_employee_experience || 
        !ip_salary
    ) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [
        ip_username, 
        ip_first_name, 
        ip_last_name, 
        ip_address, 
        ip_birthdate, 
        ip_taxID, 
        ip_hired, 
        ip_employee_experience, 
        ip_salary
    ];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add employee to the database' });
        }
        res.json({ message: 'Employee added successfully', results });
    });
});

app.post('/add_location', (req, res) => {
    const { ip_label, ip_x_coord, ip_y_coord, ip_space } = req.body;

    // Validate input fields
    if (!ip_label || !ip_x_coord || !ip_y_coord || !ip_space) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_location(?, ?, ?, ?)';
    const params = [ip_label, ip_x_coord, ip_y_coord, ip_space];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add location to the database' });
        }
        res.json({ message: 'Location added successfully', results });
    });
});




app.post('/add_owner', (req, res) => {
    const { ip_username, ip_first_name, ip_last_name, ip_address, ip_birthdate } = req.body;

    if (!ip_username || !ip_first_name || !ip_last_name || !ip_address || !ip_birthdate) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_owner(?, ?, ?, ?, ?)';
    const params = [ip_username, ip_first_name, ip_last_name, ip_address, ip_birthdate];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add owner to the database' });
        }
        res.json({ message: 'Owner added successfully', results });
    });
});




app.post('/add_product', (req, res) => {
    const { ip_barcode, ip_name, ip_weight } = req.body;

    if (!ip_barcode || !ip_name || !ip_weight) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_product(?, ?, ?)';
    const params = [ip_barcode, ip_name, ip_weight];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add product to the database' });
        }
        res.json({ message: 'Product added successfully', results });
    });
});


app.post('/add_service', (req, res) => {
    const { ip_id, ip_long_name, ip_home_base, ip_manager } = req.body;

    if (!ip_id || !ip_long_name || !ip_home_base || !ip_manager) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_service(?, ?, ?, ?)';
    const params = [ip_id, ip_long_name, ip_home_base, ip_manager];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add service to the database' });
        }
        res.json({ message: 'Service added successfully', results });
    });
});


app.post('/add_van', (req, res) => {
    const { ip_id, ip_tag, ip_fuel, ip_capacity, ip_sales, ip_driven_by } = req.body;

    // Validate input fields
    if (!ip_id || !ip_tag || !ip_fuel || !ip_capacity || !ip_sales || !ip_driven_by) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL add_van(?, ?, ?, ?, ?, ?)';
    const params = [ip_id, ip_tag, ip_fuel, ip_capacity, ip_sales, ip_driven_by];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add van to the database' });
        }
        res.json({ message: 'Van added successfully', results });
    });
});

app.post('/add_worker_role', (req, res) => {
    const { ip_username } = req.body;

    if (!ip_username) {
        return res.status(400).json({ error: 'ip_username is required' });
    }

    const query = 'CALL add_worker_role(?)';
    const params = [ip_username];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to add worker role to the database' });
        }
        res.json({ message: 'Worker role added successfully', results });
    });
});

app.post('/drive_van', (req, res) => {
    const { ip_id, ip_tag, ip_destination } = req.body;

    if (!ip_id || !ip_tag || !ip_destination) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL drive_van(?, ?, ?)';
    const params = [ip_id, ip_tag, ip_destination];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to drive van' });
        }
        res.json({ message: 'Van driven successfully', results });
    });
});


app.post('/fire_employee', (req, res) => {
    const { ip_username, ip_id } = req.body;

    if (!ip_username || !ip_id) {
        return res.status(400).json({ error: 'Both ip_username and ip_id are required' });
    }

    const query = 'CALL fire_employee(?, ?)';
    const params = [ip_username, ip_id];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to fire employee from the database' });
        }
        res.json({ message: 'Employee fired successfully', results });
    });
});


app.post('/hire_employee', (req, res) => {
    const { ip_username, ip_id } = req.body;

    if (!ip_username || !ip_id) {
        return res.status(400).json({ error: 'Both ip_username and ip_id are required' });
    }

    const query = 'CALL hire_employee(?, ?)';
    const params = [ip_username, ip_id];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to hire employee into the database' });
        }
        res.json({ message: 'Employee hired successfully', results });
    });
});


app.post('/load_van', (req, res) => {
    const { ip_id, ip_tag, ip_barcode, ip_more_packages, ip_price } = req.body;

    if (!ip_id || !ip_tag || !ip_barcode || !ip_more_packages || !ip_price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL load_van(?, ?, ?, ?, ?)';
    const params = [ip_id, ip_tag, ip_barcode, ip_more_packages, ip_price];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to load van with the specified packages' });
        }
        res.json({ message: 'Van loaded successfully', results });
    });
});


app.post('/manage_service', (req, res) => {
    const { ip_username, ip_id } = req.body;

    if (!ip_username || !ip_id) {
        return res.status(400).json({ error: 'Both ip_username and ip_id are required' });
    }

    const query = 'CALL manage_service(?, ?)';
    const params = [ip_username, ip_id];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to manage service in the database' });
        }
        res.json({ message: 'Service managed successfully', results });
    });
});


app.post('/purchase_product', (req, res) => {
    const { ip_long_name, ip_id, ip_tag, ip_barcode, ip_quantity } = req.body;

    if (!ip_long_name || !ip_id || !ip_tag || !ip_barcode || !ip_quantity) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL purchase_product(?, ?, ?, ?, ?)';
    const params = [ip_long_name, ip_id, ip_tag, ip_barcode, ip_quantity];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to purchase product' });
        }
        res.json({ message: 'Product purchased successfully', results });
    });
});

app.post('/refuel_van', (req, res) => {
    const { ip_id, ip_tag, ip_more_fuel } = req.body;

    if (!ip_id || !ip_tag || !ip_more_fuel) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL refuel_van(?, ?, ?)';
    const params = [ip_id, ip_tag, ip_more_fuel];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to refuel van' });
        }
        res.json({ message: 'Van refueled successfully', results });
    });
});

app.post('/remove_driver_role', (req, res) => {
    const { ip_username } = req.body;

    if (!ip_username) {
        return res.status(400).json({ error: 'ip_username is required' });
    }

    const query = 'CALL remove_driver_role(?)';
    const params = [ip_username];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to remove driver role from the database' });
        }
        res.json({ message: 'Driver role removed successfully', results });
    });
});

app.post('/remove_product', (req, res) => {
    const { ip_barcode } = req.body;

    if (!ip_barcode) {
        return res.status(400).json({ error: 'ip_barcode is required' });
    }

    const query = 'CALL remove_product(?)';
    const params = [ip_barcode];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to remove product from the database' });
        }
        res.json({ message: 'Product removed successfully', results });
    });
});

app.post('/remove_van', (req, res) => {
    const { ip_id, ip_tag } = req.body;

    if (!ip_id || !ip_tag) {
        return res.status(400).json({ error: 'Both ip_id and ip_tag are required' });
    }

    const query = 'CALL remove_van(?, ?)';
    const params = [ip_id, ip_tag];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to remove van from the database' });
        }
        res.json({ message: 'Van removed successfully', results });
    });
});

app.post('/start_funding', (req, res) => {
    const { ip_owner, ip_amount, ip_long_name, ip_fund_date } = req.body;

    if (!ip_owner || !ip_amount || !ip_long_name || !ip_fund_date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'CALL start_funding(?, ?, ?, ?)';
    const params = [ip_owner, ip_amount, ip_long_name, ip_fund_date];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to start funding' });
        }
        res.json({ message: 'Funding started successfully', results });
    });
});

app.post('/takeover_van', (req, res) => {
    const { ip_username, ip_id, ip_tag } = req.body;

    if (!ip_username || !ip_id || !ip_tag) {
        return res.status(400).json({ error: 'All fields (ip_username, ip_id, ip_tag) are required' });
    }

    const query = 'CALL takeover_van(?, ?, ?)';
    const params = [ip_username, ip_id, ip_tag];

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error calling stored procedure:', err.stack);
            return res.status(500).json({ error: 'Failed to takeover van' });
        }
        res.json({ message: 'Van takeover successful', results });
    });
});

