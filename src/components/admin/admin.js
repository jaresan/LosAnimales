import React from 'react';
import { Link }from 'react-router-dom';
import User from '../user/user';

export default props => {
  return (
    <div>
    <div id="admin-page">
    <div className="administrator-page">
      <Link to="/admin/add-species">
        <button className="adminButton">
          <img src="/img/addSpecie.png"/>
          <h6>
              Add new species
          </h6>
        </button>
      </Link>
      <Link to="/admin/add-animal">
        <button className="adminButton">
          <img src="/img/addAnimal.png"/>
          <h6>
              Add new animals
          </h6>
        </button>
      </Link>
      <Link to="/admin/edit-species">
          <button className="adminButton">
              <img src="/img/editSpecie.png"/>
              <h6>
                  Edit species
              </h6>
          </button>
      </Link>
        <Link to="/admin/edit-animal">
            <button className="adminButton">
                <img src="/img/editAnimal.png"/>
                <h6>
                    Edit animal
                </h6>
            </button>
        </Link>
    </div>
  </div>
  </div>
  )
}
