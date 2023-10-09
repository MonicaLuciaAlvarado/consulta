const ActividadController = require("../controllers/actividad.controller");
const MuseoController = require("../controllers/museo.controller");
const PinController = require("../controllers/pin.controller");

module.exports = app => {
    app.get('/api/actividades', ActividadController.get_all);
    app.post('/api/actividades', ActividadController.create_actividad);
    app.get('/api/actividades/:id', ActividadController.get_actividad);
    app.put('/api/actividades/:id', ActividadController.update_actividad);
    app.delete('/api/actividades/:id', ActividadController.delete_actividad);

    app.get('/api/museos', MuseoController.get_all);
    app.post('/api/museos', MuseoController.create_museo);
    app.get('/api/museos/:id', MuseoController.get_museo);
    app.put('/api/museos/:id', MuseoController.update_museo);
    app.delete('/api/museos/:id', MuseoController.delete_museo);

    app.post('/api/pines', PinController.create_pin);
    app.get('/api/pines', PinController.get_all);

}