import React from 'react';

class Filters extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		search: ''
	  }
	}
  
	handleKeyDown(event) {
	  const { onSearch } = this.props;
	  const { value } = event.target || "";
  
	  this.setState({ search: value });
  
	  onSearch(value);
	}
  
	render() {
	  const { search } = this.state;
	  const { organize, selectedFilter } = this.props;
  
	  return (
		<div className="container" data-testid="filters">
		  <section className="filters">
			<div className="filters__search">
			  <input type="text" value={search || ""} className="filters__search__input"
				placeholder="Pesquisar" onChange={(event) => this.handleKeyDown(event)}/>
  
			  <button className="filters__search__icon">
				<i className="fa fa-search" />
			  </button>
			</div>
  
			<button className={`filters__item ${selectedFilter === 'name' && 'is-selected'}`}
			  onClick={() => organize('name')}>
			  Nome
			</button>
  
			<button className={`filters__item ${selectedFilter === 'country' && 'is-selected'}`}
			  onClick={() => organize('country')}>
			  País
			</button>

			<button className={`filters__item ${selectedFilter === 'admissionDate' && 'is-selected'}`}
			  onClick={() => organize('admissionDate')}>
			  Data de admissão
			</button>
  
			<button className={`filters__item ${selectedFilter === 'company' && 'is-selected'}`}
			  onClick={() => organize('company')}>
			  Empresa
			</button>
  
			<button className={`filters__item ${selectedFilter === 'department' && 'is-selected'}`}
			  onClick={() => organize('department')}>
			  Departamento
			</button>
  
		  </section>
		</div>
	  )
	}
  }
  
  export default Filters;
