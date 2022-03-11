import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      //Fonts
      
      //Header
    // <div className='header'>
    //     <div className='header-left'>
        
    //     </div>
    //     <div className='header-right'>
    //         <div className= ""></div>
    //     </div>
    // </div>
        //Header end
        //mainBody
        <div className='body__main'>
        {/* Sidebar */}
            <div className='sidebar'>
                <div className='sidebar__top'>
                    <img src='https://cdn.vox-cdn.com/thumbor/9hsvXuc8Qw05IPA0PRBOwSmMyKE=/0x0:720x732/1200x800/filters:focal(300x26:414x140)/cdn.vox-cdn.com/uploads/chorus_image/image/68877232/Kobe.0.jpg' alt='Kobe'></img>
                    <i className='material-icons'>write_article</i>
                    <h2>Articles</h2>
                </div>
                <div className='sidebar__stats'>
                    <div className='sidebar__stat'>
                        <a href='https://abcnews.go.com/Sports/philadelphia-76ers-james-harden-passes-reggie-miller-sole/story?id=83378285'>Philadelphia 76ers' James Harden passes Reggie Miller for sole possession of 3rd place in career 3-pointers </a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://abcnews.go.com/Sports/york-knicks-cam-reddish-season-due-shoulder-separation/story?id=83374531'>New York Knicks' Cam Reddish done for season due to shoulder separation
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://abcnews.go.com/Sports/los-angeles-lakers-woes-continue-ot-loss-western/story?id=83360100'>Los Angeles Lakers' woes continue in OT loss to Western Conference-worst Houston Rockets
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://abcnews.go.com/Sports/sacramento-kings-domantas-sabonis-suspended-game-confronting-making/story?id=83344439'>Sacramento Kings' Domantas Sabonis suspended one game for confronting, making contact with official Monday night
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://theathletic.com/3174543/2022/03/10/devin-booker-is-back-suns-look-like-nbas-best-and-the-heat-have-issues-final-thoughts-from-miami/'>Devin Booker is back, Suns look like NBA’s best and Heat have issues: Final Thoughts from Miami
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://theathletic.com/3174784/2022/03/10/giannis-antetokounmpos-82-points-in-24-hours-fuels-two-bucks-wins-that-aint-normal-bro/'>Giannis Antetokounmpo’s 82 points in 24 hours fuels two Bucks wins: ‘That ain’t normal, bro’
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://theathletic.com/3172464/2022/03/10/vecenies-2022-nba-draft-big-board-3-0-chet-holmgren-jabari-smith-in-their-own-tier-shaedon-sharpe-enters-fray/'>Vecenie’s 2022 NBA Draft Big Board 3.0: Chet Holmgren, Jabari Smith in their own tier; Shaedon Sharpe enters fray
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://theathletic.com/3176160/2022/03/10/mover-and-shaker-knicks-center-mitchell-robinson-is-making-his-case-on-the-court/'>Mover and shaker: Knicks center Mitchell Robinson is making his case on the court
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>
                    <div className='sidebar__stat'>
                        <a href='https://theathletic.com/3174503/2022/03/10/defense-defense-defense-as-jayson-tatum-catches-fire-celtics-identity-remains-defense/'>‘Defense, defense, defense’: As Jayson Tatum catches fire, Celtics’ identity remains defense
</a>
                        <p className='sidebar__statNumber'></p>
                    </div>

                </div>         
            </div>
            {/* //sidebar end */}
            {/* comment section  */}
            <div className='feed'>
                <div className='feed__inputContainer'>
                    <div className='feed__input'>
                    <i className='material-icons'>create</i>
                    <form>
                        <input type="text" placeholder='Start a post'/>
                        <button>Send</button>
                    </form>
                    </div>
                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>insert_photo</i> 
                            <h4>Photo</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>subscriptions</i> 
                            <h4>Video</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>event</i> 
                            <h4>Event</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>note</i> 
                            <h4>Note</h4>
                        </div>
                    </div>
                </div>
            
            {/* post start */}
            <div className='post'>
                <div className='post__header'>
                        <div className='post__info'>
                            <h2>Username</h2>
                            <p>Photo</p>
                        </div>
                

                    <div className='post__body'>
                    <input type="text" placeholder='Comment Here'/>
                        <button>Post</button>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                </div>
                <div className='post'>
                <div className='post__header'>
                        <div className='post__info'>
                            <h2>Username</h2>
                            <p>Photo</p>
                        </div>
                

                    <div className='post__body'>
                    <input type="text" placeholder='Comment Here'/>
                        <button>Post</button>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                </div>
                <div className='post'>
                <div className='post__header'>
                        <div className='post__info'>
                            <h2>Username</h2>
                            <p>Photo</p>
                        </div>
                

                    <div className='post__body'>
                    <input type="text" placeholder='Comment Here'/>
                        <button>Post</button>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                </div>
                <div className='post'>
                <div className='post__header'>
                        <div className='post__info'>
                            <h2>Username</h2>
                            <p>Photo</p>
                        </div>
                

                    <div className='post__body'>
                    <input type="text" placeholder='Comment Here'/>
                        <button>Post</button>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                </div>
                

            </div>
            {/* comment end */}
            </div>
            {/* feed end */}
            {/* Widget start */}
            <div className='widgets'>
                <div className='widgets__header'>
                <h2>Players</h2>
                <i className='material-icons'>info</i>
                </div>

                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
            </div>
            {/* Widget End */}
        </div>
        
        
        //mainBody
//     <Container>
//   <Row>
//     <Col sm={8}>sm=8</Col>
//     <Col sm={4}>sm=4</Col>
//   </Row>
//   <Row>
//     <Col sm>sm=true</Col>
//     <Col sm>sm=true</Col>
//     <Col sm>sm=true</Col>
//   </Row>
// </Container>
  )
}

export default Home

{/* <>
<img src="{player.PhotoUrl}" alt={player.FirstName} />
<h1> {player.FirstName} {player.LastName} </h1>
<h2> {player.Status} </h2>
<h2> {player.Team} </h2>
<h2> {player.PositionCategory} </h2>
<h2> {player.Position} </h2>
<h2> {player.Height} </h2>
<h2> {player.Weight} </h2>
<h2> {player.BirthDate} </h2>
<h2> {player.BirthCity}, {player.BirthState} </h2>
<h2> {player.HighSchool} </h2>
<h2> {player.College} </h2>
<h2> {player.Salary} </h2>
<h2> {player.Experience} </h2>
<a href='https://www.nba.com/stats/player/{player.NbaDotComPlayerID}'>Player stats </a>
</> */}