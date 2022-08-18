import { useState } from 'react'
import { Form, Row, Col, Button, Alert} from 'react-bootstrap'
import useCategoria from '../hooks/useCategoria'
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {
    const {categoria} = useCategoria()
    const { consultarBebidas } = useBebidas()
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta("Todos los campos son obligatorios")
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
    }
  return (
    <Form onSubmit={handleSubmit}>
         {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
            <Form.Group>
                <Form.Label htmlFor='nombre'>
                    Nombre Bebida
                </Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Busque la bebida Ej. Tequila, Ron'
                    id='nombre'
                    name='nombre'
                    value={busqueda.nombre}
                    onChange={
                        e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })
                    }
                    >
                </Form.Control>
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group>
                <Form.Label htmlFor='categoria'>
                    Categoría Bebida
                </Form.Label>
                <Form.Select
                    id='categoria'
                    name='categoria'
                    value={busqueda.categoria}
                    onChange={
                        e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })
                    }
                    >
                    <option value="">- Seleccione la categoría -</option>
                    {
                        categoria.map(cat => (
                            <option
                                key={cat.strCategory}
                                value={cat.strCategory}
                            > {cat.strCategory} 
                            </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end mt-2'>
            <Col md={3}>
            <Button
                variant='danger'
                className='text-uppercase w-100'
                type='submit'>
                    Buscar Bebidas
            </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario