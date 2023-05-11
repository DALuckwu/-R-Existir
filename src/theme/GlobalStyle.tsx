// import { theme } from './theme';

export default function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: Open Sans, sans-serif;
          background-image: linear-gradient(to right, 
            rgb(255, 0, 0, 0.3),
            rgb(255, 165, 0, 0.3),
            rgb(255, 255, 0, 0.3),
            rgb(0, 128, 0, 0.3),
            rgb(0, 0, 255, 0.3),
            rgb(75, 0, 130, 0.3),
            rgb(238, 130, 238, 0.3));
        }
      `}</style>
    )
}