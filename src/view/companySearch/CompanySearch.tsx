import {Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import './CompanySearch.css';
import CompanyItem from "../companyItem/CompanyItem";
import {mockData} from "../../mock/mockData"

 const CompanySearch = () => {

     const [_companyTitle, setCompanyTitle] = useState('');
     const [_address, setAddress] = useState('');

  return (
      <div className="company-search-container">
        <div className="company-search-top-container">
            <TextField
                className="company-search-text-input"
                variant="outlined"
                label="Company name or job title"
                required
                onChange={e => setCompanyTitle(e.target.value)}
                defaultValue="Software Engineering"/>
            <TextField
                className="company-search-text-input"
                variant="outlined"
                label="City, state, or zip (optional)"
                onChange={e => setAddress(e.target.value)}/>
            <Button
                className="company-search-button"
                variant="contained">Find Companies</Button>
        </div>
        <div className="company-search-bottom-container">
            <div className="company-search-bottom-header-container">
                <span className="company-search-list-title">Popular companies for Software Engineer</span><br/>
                <span className="company-search-list-sub-title">Based on reviews and recent job openings on Indeed</span>
            </div>
            <div className="company-search-bottom-header-container">
                {
                    mockData.companies.map(company => {
                        return <CompanyItem name={company.name} imageUrl={company.imageUrl} />
                    })
                }
            </div>
        </div>
      </div>
  );
}

export default CompanySearch;
