import ContributionStore from './ContributionStore';

class AModule {

	constructor(){
		this._onChange = this._onChange.bind(this);
	}

	setup(){
		ContributionStore.listen(this._onChange);
	}

	_onChange(){
		console.log('something changed');
	}
}

export default new AModule();