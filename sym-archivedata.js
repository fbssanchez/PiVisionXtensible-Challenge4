(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "archivedata",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150 
			} 
		}
	}

	var dataItems = [
		{
			Time: "11-Jun-19 09:00:00",
			Value: 100
		},
		{
			Time: "10-Jun-10 06:00:00",
			Value:50
		}
	];

	symbolVis.prototype.init = function(scope, elem) {
		scope.Values = dataItems;
	 };

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
