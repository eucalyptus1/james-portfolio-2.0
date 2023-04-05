import avatar from '../assets/images/avatar2.png'

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <img src={avatar} alt='stuff'/>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum mi nec augue eleifend posuere. Fusce vitae pulvinar lectus, a laoreet purus. Nullam eleifend metus ac diam pretium varius. Phasellus luctus nunc non fermentum consequat. Etiam facilisis nunc in mi tincidunt mattis. Pellentesque nec lacinia ex. Nullam et ex egestas, porttitor massa eu, cursus erat. Integer sodales, erat at tempus lobortis, tellus mauris pretium neque, sit amet convallis nisl nulla a nibh. Suspendisse vulputate, mi sagittis varius finibus, erat lorem efficitur lorem, et condimentum diam lectus at metus. Donec ac sagittis turpis. Curabitur eu turpis sed justo hendrerit ullamcorper. Suspendisse eu magna sit amet ligula consectetur gravida nec nec enim. Nullam euismod fermentum metus elementum placerat. Mauris elementum convallis gravida.</p>
            </div>
        </section>
    );
}

export default About;