import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Toronto Nepali Film Festival 2018</h2>
                <p>
                    Submissions are now open for the 9th Toronto Nepali Film Festival.
                    The deadline for the submission is February 28th, 2018.
                    Any inquiries regarding the submission please send your email to
                    <a href="mailto:programming@tnff.ca?Subject=TNFF2018 Submission" target="_top"> programming@tnff.ca</a>
                </p>
                <br></br>
                <a href="https://goo.gl/forms/qpg2JgIylTNCZUFs2" target="_blank" class="button">Submission Form</a>
            </div>
        );
    }
}

export default Home;