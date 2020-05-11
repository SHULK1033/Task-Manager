import React from 'react';

export const VisibilityControl = props => {
    return (
        <div className="form-chek">
            <input className="form-check-input" checked={props.isChecked} onChange={e => props.callback(e.target.checked)} type="checkbox" />
            <label htmlFor="form-check-label">
                Show {props.description}
            </label>
        </div>
    )
}