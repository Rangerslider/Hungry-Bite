import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toastActions } from "../../../store/ui/toastSlice";
import "../../../styles/toast.css";

const icons = {
  success: "ri-checkbox-circle-fill",
  info: "ri-information-fill",
  error: "ri-error-warning-fill",
};

const Toast = () => {
  const toasts = useSelector((state) => state.toast.items);
  const dispatch = useDispatch();

  return (
    <div className="toast__stack" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div className={`toast__item toast__item--${toast.type}`} key={toast.id}>
          <i className={icons[toast.type] || icons.info}></i>
          <span>{toast.message}</span>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => dispatch(toastActions.remove(toast.id))}
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
