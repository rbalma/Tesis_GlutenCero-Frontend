import React from 'react';
import { Col, Row, Select, Form, Button} from "antd";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../../../../pages/Recipe/AddRecipeForm/AddRecipeForm.css';

export default function CategoryIngredients(props) {

    const {nextStep, setRecipe, recipe, prevStep} = props;

    const { Option } = Select;


    const continues = e => {
        //e.preventDefault();
        nextStep();
    };

    const back = e => {
        //e.preventDefault();
        prevStep();
    };

    return (
      <div className="form-container">
        <h1 className="mb-5">Crea tu Receta</h1>
        <Row gutter={24}>
        <Col span={24}>
        <Form.Item>
        <label>Seleccióna una categoría:</label>
        <Select
                placeholder="Seleccióna una categoría"
                onChange={e => setRecipe({ ...recipe, category: e })}
                value={recipe.category}
              >
                <Option value="aperitivos">Aperitivos</Option>
                <Option value="bebidas">Bebidas</Option>
                <Option value="dulces">Dulces</Option>
                <Option value="ensalada">Ensaladas</Option>
                <Option value="panes">Panes</Option>
                <Option value="platos principales">Platos principales</Option>
                <Option value="postres">Postres</Option>
                <Option value="sopas">Sopas</Option>
        </Select>
        </Form.Item>
        </Col>
        </Row>


        <div>
        <label>Ingresa un listado de los Ingredientes</label>
          <CKEditor
          editor={ClassicEditor}
          data={recipe.ingredient}
          onChange={(e, editor) => {
            const data = editor.getData()
            setRecipe({ ...recipe, ingredient: data })}}      
          />        
        </div>

        <br />

        <div className="row">
          <div className="col-6">
          
          <Button type="dashed" onClick={back} >Atrás</Button>
          </div>
          <div className="col-6 text-right">
          <Button type="primary" onClick={continues} >Siguiente</Button>
          </div>
        </div>
      </div>
    );
}
