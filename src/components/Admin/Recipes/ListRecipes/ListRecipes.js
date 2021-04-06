import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button, Tooltip, Modal as ModalAntd, notification } from "antd";
import { FaEdit, FaBan, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NoAvatar from "../../../../assets/img/no-avatar.png";
import Modal from "../../../Modal";
import EditRecipeForm from "../EditRecipeForm";
import {getImageApi, activateRecipeApi, deleteRecipeApi } from "../../../../api/recipe";
import { getAccessTokenApi } from "../../../../api/auth";

import "./ListRecipes.scss";

const { confirm } = ModalAntd;

export default function ListUsers(props){

    const { recipesActive, recipesInactive, setReloadRecipes } = props;
    const [viewRecipesActives, setViewRecipesActive] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

   
    
    return(
        <>
        <div className="list-users">

          <div className="list-users__header">
            <div className="list-users__header-switch">
                <Switch 
                    defaultChecked
                    onChange={() => setViewRecipesActive(!viewRecipesActives)}
                />
                <span>
                    {viewRecipesActives ? "Recetas Activas" : "Recetas Inactivas"}
                </span>
            </div>

            <Button type="primary" className="btn-submit">
            <Link to={"/admin/addUser"}> Nueva Receta </Link>
            </Button>

          </div>

                {viewRecipesActives ? (
                    <RecipesActive 
                    recipesActive={recipesActive} 
                    setIsVisibleModal={setIsVisibleModal} 
                    setModalTitle={setModalTitle} 
                    setModalContent={setModalContent}
                    setReloadRecipes={setReloadRecipes}
                     />
                ) : (
                    <RecipesInactive recipesInactive={recipesInactive} setReloadRecipes={setReloadRecipes} />
                )}
                

                <Modal
                    title={modalTitle}
                    isVisible={isVisibleModal}
                    setIsVisible={setIsVisibleModal}
                >
                   {modalContent}
                </Modal> 
        </div>
        </>
    );

}


function RecipesActive(props){
    const { recipesActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadRecipes } = props;

    const editRecipe = recipe => {
        setIsVisibleModal(true);
        setModalTitle(`Editar ${recipe.title}`);
        setModalContent(<EditRecipeForm recipe={recipe} setIsVisibleModal={setIsVisibleModal} setReloadRecipes={setReloadRecipes} />);
    }

    return (
        <>
        <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={recipesActive}
        renderItem={recipe => (
          <UserActive
            recipe={recipe}
            editRecipe={editRecipe}
            setReloadRecipes={setReloadRecipes}
          />
        )}
      />
      </>
    );
  }


function UserActive(props) {
    const { recipe, editRecipe, setReloadRecipes } = props;
    const [avatar, setAvatar] = useState(null);
  
    useEffect(() => {
      if (recipe.image) {
        getImageApi(recipe.image).then(response => {
          setAvatar(response);
        });
      } else {
        setAvatar(null);
      }
    }, [recipe]);


    const desactivateUser = () => {
        const accessToken = getAccessTokenApi();

        activateRecipeApi(accessToken, recipe._id, false)
            .then(response => {
                notification["success"]({
                    message: response
                });
                setReloadRecipes(true);
            })
            .catch(err => {
                notification["error"]({
                    message: err
                });
            });
    }


    const showDeleteConfirm = () => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando Usuario",
            content: `¿Estas seguro que quieres eliminar a ${recipe.title}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                deleteRecipeApi(accessToken, recipe._id)
                        .then(response => {
                            notification["success"]({
                                message: response
                            });
                            setReloadRecipes(true);
                        })
                        .catch(err => {
                            notification["error"]({
                                message: err
                            });
                        })
            }
        })
    }

    return (
        <>
        <List.Item
            actions={[
                <Tooltip title="Editar Receta">
                <Button type="primary" onClick={() => editRecipe(recipe)} >
                    <FaEdit />
                </Button>
                </Tooltip>,
                <Tooltip title="Desactivar Receta">
                <Button type="danger" onClick={desactivateUser} >
                    <FaBan />
                </Button>
                </Tooltip>,
                <Tooltip title="Eliminar Receta">
                <Button type="danger" onClick={showDeleteConfirm} >
                    <FaTrashAlt />
                </Button>
                </Tooltip>
            ]}
        >
        <List.Item.Meta 
                        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                        title={recipe.userName + ' ' + recipe.userLastName}
                        description={recipe.title}
        />
        </List.Item>
        </>

    )
}


function RecipesInactive(props){
    const {recipesInactive, setReloadRecipes } = props;

    return (
        <>
        <List
          className="users-active"
          itemLayout="horizontal"
          dataSource={recipesInactive}
          renderItem={recipe => (
            <RecipeInactive recipe={recipe} setReloadRecipes={setReloadRecipes} />
          )}
        />
        </>
      );
     
    }

function RecipeInactive(props) {
    const { recipe, setReloadRecipes } = props;
    const [avatar, setAvatar] = useState(null);
  
    useEffect(() => {
      if (recipe.image) {
        getImageApi(recipe.image).then(response => {
          setAvatar(response);
        });
      } else {
        setAvatar(null);
      }
    }, [recipe]);


    const activateRecipe = () => {
        const accessToken = getAccessTokenApi();

        activateRecipeApi(accessToken, recipe._id, true)
            .then(response => {
                notification["success"]({
                    message: response
                });
                setReloadRecipes(true);
            })
            .catch(err => {
                notification["error"]({
                    message: err
                });
            });
    }

    const showDeleteConfirm = () => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando Usuario",
            content: `¿Estas seguro que quieres eliminar a ${recipe.title}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                deleteRecipeApi(accessToken, recipe._id)
                        .then(response => {
                            notification["success"]({
                                message: response
                            });
                            setReloadRecipes(true);
                        })
                        .catch(err => {
                            notification["error"]({
                                message: err
                            });
                        })
            }
        })
    }


    return (
        <>
        <List.Item
                    actions={[
                        <Tooltip title="Activar Receta">
                        <Button 
                            type="primary"
                            onClick={activateRecipe}
                        >
                            <FaCheckCircle  />
                        </Button>
                        </Tooltip>,
                        <Tooltip title="Eliminar Receta">
                        <Button
                            type="danger"
                            onClick={showDeleteConfirm}
                        >
                            <FaTrashAlt />
                        </Button>
                        </Tooltip>
                    ]}
                >
                     <List.Item.Meta 
                        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                        title= {recipe.userName + ' ' + recipe.userLastName}
                        description={recipe.title}
                    />
                </List.Item>
                </>
    )

}