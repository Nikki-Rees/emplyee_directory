import React from "react";
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchForm(props) {
    return (
        <div className="searchform">
            <Form inline>
                <label htmlFor="search">Search:</label>
                <FormControl
                    onChange={props.onSearch}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for name"
                    id="search"
                />
                <Button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
        </Button>
            </Form>
        </div>
    );
}
