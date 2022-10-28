import React from "react";
import { useDispatch } from "react-redux";
import {
  handleDelete,
  taskDone,
  editTasks,
  editSubmit,
} from "../../redux/reducers/tasks";

const EditForm = (props) => {
  const dispatch = useDispatch();
  return (
    <div id={props.item.id}>
      {props.item.isEdit ? (
        <div id={props.item.id}>
          <input
            type="date"
            defaultValue={props.dateNow}
            onChange={props.editDateListener}
            min={props.dateNow}
          />
          <input
            type="text"
            defaultValue={props.item.title}
            key={props.item.id}
            id={props.item.id}
            title={props.item.text}
            onChange={props.inputListener}
          />
          <button
            onClick={() =>
              dispatch(
                editSubmit(
                  props.item.isEdit,
                  props.inputValue,
                  props.editDateValue
                )
              )
            }
          >
            Сохранить
          </button>
        </div>
      ) : (
        <div id={props.item.id}>
          <button
            style={{ margin: "0 10px" }}
            onClick={() => dispatch(handleDelete(props.item.id))}
          >
            Удалить
          </button>
          <button
            style={{ margin: "0 10px" }}
            onClick={() => dispatch(taskDone(props.item.id))}
          >
            Выполнена
          </button>
          <button onClick={() => dispatch(editTasks(props.item.id))}>
            Редактировать
          </button>
        </div>
      )}
    </div>
  );
};

export default EditForm;
