import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import NoAvatar from "../../../../assets/img/no-imagen.jpg";
import {Avatar, Input, Button, notification} from "antd";

import '../../../../pages/Recipe/AddRecipeForm/AddRecipeForm.css';

export default function TitleImage(props) {
    const {nextStep, setRecipe, recipe} = props;
    const [avatar, setAvatar] = useState(null);


    const continues = e => {
        nextStep();
    };


    return (
        <>
        <div className="form-container">
        <h1 className="mb-5">Crea tu Receta</h1>

            <label>Ingresa un titulo</label>
            <Input
              name="title"
              onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} value={recipe.title}
              style={{marginBottom:"18px"}}
            />

             <label>Sube una imagen en formato png - jpg</label>
            <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      
        <div style={{paddingTop:"18px"}}>
        <Button type="primary" onClick={continues} >Siguiente</Button>
        </div>      
        </div>
    </>
    );

}


function UploadAvatar(props) {
    const { avatar, setAvatar } = props;
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
      if (avatar) {
        if (avatar.preview) {
          setAvatarUrl(avatar.preview);
        } else {
          setAvatarUrl(avatar);
        }
      } else {
        setAvatarUrl(null);
      }
    }, [avatar]);

    const onDropAccepted = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({ file, preview: URL.createObjectURL(file)});
        }, [setAvatar]
    );

    const onDropRejected = () => {
      notification["error"]({
        message: "Formato de la imagen no válido. Usar JPG - PNG."
      });
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDropAccepted,
        onDropRejected
      });
    
      return (
        <div className="upload-image" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Avatar shape="square" size={64} src={NoAvatar} />
          ) : (
            <Avatar style={{width:"400px"}} shape="square" size={200} src={avatarUrl ? avatarUrl : NoAvatar} />
          )}
        </div>
      );

}

