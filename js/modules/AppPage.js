export default {
    template: `
        <section>
            <h1>WAZZZZUH YO ON THE MAIN PAGE</h1>
            <form>
                <label for="username">Username:</label>
                <input v-model="uname" type="text" name="username" required placeholder="enter username">

                <label for="passwor">Password:</label>
                <input v-model="pword" type="text" name="password" required placeholder="enter password">

                <input @click="submitData" type="submit" calue="Submit">
            </form>
        </section>
    `,

    data: function() {
        return {
            uname: "",
            pword: ""
        }
    },

    methods: {
        submitData() {
            //hit an api with a FETCH call
            // refer to the mailform example from last semester -> nodemailer setup
            //debugger;
        }
    }

}