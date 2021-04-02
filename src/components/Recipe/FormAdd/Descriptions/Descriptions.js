import React, {useState} from 'react';
import {Button} from 'antd';
import Modal from '../../../Modal';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import PreviewRecipe from '../PreviewRecipe';

export default function Descriptions(props) {

    const {nextStep, prevStep, recipe, setRecipe} = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const continues = e => {
        //e.preventDefault();
        nextStep();
    };

    const back = e => {
        //e.preventDefault();
        prevStep();
    };

    const viewRecipe = recipe => {
        setIsVisibleModal(true);
        setModalTitle('Vista previa de la receta');
        setModalContent(<PreviewRecipe recipe={recipe} setIsVisibleModal={setIsVisibleModal} />);
    }


    return (
        <div className="form-container">
                <h1 className="mb-5">Crea tu Receta</h1>
                <label>Ingresa los pasos para realizar la receta</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={recipe.description}
                    onChange={(e, editor) => {
                        const data = editor.getData()
                        setRecipe({ ...recipe, description: data })}}      
                />   

                <br /><br />

          <div className="row">
          <div className="col-4">
          
          <Button type="dashed" onClick={back} >Atrás</Button>
          </div>
          <div className="col-4">
          <Button type="primary" shape="round" onClick={() => viewRecipe(recipe)} >Vista Previa</Button>
          </div>
          <div className="col-4 text-right">
          <Button type="primary" onClick={continues} >Finalizar</Button>
          </div>
        </div>

                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                   {modalContent}
                </Modal> 



            </div>
    )
}
