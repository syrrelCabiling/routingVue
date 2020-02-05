export default { //everything should go inside the section tag
    template: ` 
        <section>
            <h1>WELCOME!!!!!!!!</h1>
            <button @click="registerUser">Register</button>
        </section>
    `,

    data: function() {
        return {
            message: "Welcome"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
}