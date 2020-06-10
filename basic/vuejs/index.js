let app = new Vue({ 
    el: '#app',
    data: {
        isLoading: true,
        content: undefined,
    },
    async mounted() {
        // Get the current view ID
        let qid = await Bridge.View.getId();
        
        // Create the view object
        let view = new Zaza.View(qid);
        
        // Download some data
        let data = await view.downloadJSON("data.json");
        
        // Update the state
        this.isLoading = false;
        this.content = data;
    }
});