import React from 'react';
import './schedule-movies.styles.scss';

class ScheduleMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const movies = [
      {
        image: 'https://zhovten-kino.kiev.ua/images/bf/49/bf494be0c6d909500f109442d55a2789.jpeg',
        name: 'Диво-жінка 1984',
        restriction: '12+',
        rating: '6.9',
        url: '#',
        sessions: [
          {
            sessionId: '1',
            time: '11:00',
            available: false
          },
          {
            sessionId: '2',
            time: '16:05',
            available: true
          },
          {
            sessionId: '3',
            time: '20:40',
            available: true
          }
        ]
      },
      {
        image: 'https://zhovten-kino.kiev.ua/images/f3/60/f360fab7ac42a43004a1df7812a05db7.jpeg',
        name: 'Italian Short Film Days',
        restriction: '12+',
        rating: '6.9',
        url: '#',
        sessions: [
          {
            sessionId: '1',
            time: '19:00',
            available: true
          }
        ]
      },
      {
        image: 'https://zhovten-kino.kiev.ua/images/15/bd/15bd495e1c4e5f7f00c7986e9c2e761b.jpeg',
        name: 'Безславні кріпаки',
        restriction: '12+',
        rating: '6.9',
        url: '#',
        sessions: [
          {
            sessionId: '1',
            time: '14:55',
            available: true
          },
          {
            sessionId: '2',
            time: '17:10',
            available: true
          }
        ]
      },
      {
        image: 'https://zhovten-kino.kiev.ua/images/52/c2/52c288e241f53320a8121d4848677a0f.jpeg',
        name: 'Сімейка Крудсів: нова ера',
        restriction: '12+',
        rating: '6.9',
        url: '#',
        sessions: [
          {
            sessionId: '1',
            time: '13:20',
            available: true
          }
        ]
      },
      {
        image: 'https://zhovten-kino.kiev.ua/images/79/03/7903870553d74a6dc05b9f8bd3261fe0.jpeg',
        name: 'Ще по одній',
        restriction: '16+',
        rating: '6.9',
        url: '#',
        sessions: [
          {
            sessionId: '1',
            time: '13:50',
            available: true
          },
          {
            sessionId: '2',
            time: '19:05',
            available: true
          }
        ]
      }
    ];

    this.setState({ movies: movies });
  }

  render() {
    const movies = this.state.movies.concat(this.state.movies);

    return (
      <div className="schedule__films">
        {movies.map((movie, index) => (
          <div key={index} className="schedule__film">
            <a href={movie.url}>
              <div className="age_restriction">{movie.restriction}</div>
              <img className="schedule__film__poster" src={movie.image} alt={movie.name} />
              <p className="schedule__film__title">{movie.name}</p>
            </a>
            <div className="schedule__film__sessions">
              {movie.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className={session.available ? 'session' : 'session deact'}>
                  {session.time}
                  <p className="attr" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ScheduleMovies;
