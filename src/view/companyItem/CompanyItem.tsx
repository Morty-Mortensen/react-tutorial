import React, {FC, Fragment} from 'react';
import './CompanyItem.css';

export interface Company {
    name: string;
    imageUrl?: string
}

 const CompanyItem: FC<Company> = ({name, imageUrl}): JSX.Element => {
    return (
        <Fragment>
            <div className="company-item-container">
                <img
                    className="company-item-logo"
                    src={imageUrl}
                    alt="company-logo" />
                <span>{name}</span>
            </div>
            <hr className="company-item-border"/>
        </Fragment>
  );
}

export default CompanyItem;
