export default DS.ActiveModelAdapter.extend({
  host: "http://localhost:3000",
  // Force ember-data to append the `json` suffix
  buildURL: function(record, suffix) {
    return this._super(record, suffix) + ".json";
  }
});