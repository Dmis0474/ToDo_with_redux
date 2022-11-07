import React from "react";
import { useDispatch } from "react-redux";
import {
  handleDelete,
  taskDone,
  editTasks,
  editSubmit,
} from "../../redux/actions/actionCreators";
import styles from "../editForm/editForm.module.css";

const EditForm = (props) => {
  const dispatch = useDispatch();
  return (
    <div id={props.item.id}>
      {props.item.isEdit ? (
        <div id={props.item.id}>
          <div className={styles.inputWrapper}>
            <input
              required
              type="text"
              defaultValue={props.item.text}
              key={props.item.id}
              id={props.item.id}
              text={props.item.text}
              onChange={props.inputListener}
            />
            <input
              required
              type="date"
              defaultValue={props.dateNow}
              onChange={props.editDateListener}
              min={props.dateNow}
            />
          </div>

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
            className={styles.save}
          ></button>
        </div>
      ) : (
        <div id={props.item.id} className={styles.buttonsWrapper}>
          <button
            onClick={() =>
              dispatch(handleDelete(props.item.id), props.increaseTaskDone(), props.reduceTaskNow())
            }
            className={styles.delete}
          ></button>
          <button
            onClick={() => dispatch(taskDone(props.item.id))}
            className={styles.done}
          ></button>
          <button
            onClick={() => dispatch(editTasks(props.item.id))}
            className={styles.edit}
          ></button>
        </div>
      )}
    </div>
  );
};

export default EditForm;
