/* Class: lattice.cms.CMS */

Request.JSON.implement({
	success: function(text){
		var json;
		try {
			json = this.response.json = JSON.decode( text, this.options.secure );
		} catch ( error ){
			throw error + " : " + text;
			this.fireEvent('error', [ text, error ] );
			return;
		}
		if ( json == null ){
			this.onFailure();
		} else if( !json.returnValue ){
			if( json.response ){
				if( !lattice.warningModal ){
					lattice.warningModal = new lattice.ui.Modal();
				}
				lattice.warningModal.setContent( json.response, 'Error' );
				lattice.warningModal.show();
				throw json.response;
			}else{
				throw 'response to JSON request has eiter no returnValue, or no response.'
			}
		} else {
			this.onSuccess( json, text );
		}
	}
});

Basket = new Class({

	/* Constructor: initialize */
	Extends: lattice.modules.Module,

	/* Section: Getters & Setters */    
	
	getSaveFieldURL: function(){
		return  "saveField/"+ this.element.getData( 'documentId' );
	},
	
	getClearFieldURL: function(){
		throw "Abstract function getClearFieldURL must be overriden in" + this.toString();		
	},

	getClearFieldURL: function(){
		throw "Abstract function getClearFieldURL must be overriden in" + this.toString();		
	},

    
});