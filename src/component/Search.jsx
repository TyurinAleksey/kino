import { type } from "@testing-library/user-event/dist/type";
import React, {Component} from "react";

class Search extends Component {

    state = {
        search: '',
        type: 'all'
    }

    handleKey = (e) => {
        if (e.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(
            () => ({type: e.target.dataset.type}),
            () => {this.props.searchMovies(this.state.search, this.state.type)}
        )

    }

    render() {
        return (<div className="row">
        <div className="col s22" style={{display: "flex", alignItems: "center"}}>
            <input 
            className="validate"
            placeholder="Search"
            id="search" 
            type="search" 
            onChange={(e) => this.setState({search:e.target.value})}
            value={this.state.search}
            onKeyDown={this.handleKey}
            />
            <button className="btn-search" 
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
                Найти
            </button>
        </div>
        <div>
        <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === 'all'} />
            <span>ВСЕ</span>
        </label>
        <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'} />
            <span>ФИЛЬМЫ</span>
        </label>
        <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === 'series'} />
            <span>СЕРИАЛЫ</span>
        </label>
        <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="game"
            onChange={this.handleFilter}
            checked={this.state.type === 'game'} />
            <span>ИГРЫ</span>
        </label>
        </div>
      </div>
      )
    }
}

export {Search}