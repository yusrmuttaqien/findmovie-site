import { useRef } from 'react';
import { useMovieDBHome } from 'hooks/index';
import { Wrapper, SearchBox, Discover } from './styles';

export default function Main() {
  const headerRef = useRef<HTMLDivElement>(null);

  const _handleSearch = (search: string) => {
    console.log(search);
  };
  const _handleScroll = () => {
    const headerHeight = headerRef.current?.getBoundingClientRect().height;

    window.scrollTo({
      top: headerHeight,
      behavior: 'smooth',
    });
  };

  useMovieDBHome();

  return (
    <Wrapper>
      <header ref={headerRef}>
        <div id="title-wrapper">
          <h1>Find Movies</h1>
          <p>
            powered by{' '}
            <a href="https://developer.themoviedb.org/docs" target="_blank">
              themoviedb.org
            </a>
          </p>
        </div>
        <SearchBox handleSearch={_handleSearch} isRealtime />
        <Discover onClick={_handleScroll} />
      </header>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente nulla dolor facere
      velit consectetur nam omnis debitis, vitae vel dolorem animi. At itaque ut deserunt incidunt
      nulla laudantium id corporis optio quisquam, sed rem magni maiores nostrum dolores tenetur,
      officiis numquam totam velit ex. Maxime ex voluptatum eveniet reprehenderit qui! Esse, animi.
      Nihil, non aliquid voluptatibus explicabo, corporis nemo qui similique, esse consequuntur
      repudiandae veniam beatae. Totam provident accusamus exercitationem nemo dolor sequi,
      veritatis officiis eveniet inventore amet quae iusto voluptas! Inventore, soluta totam harum
      quos, obcaecati minima explicabo, nesciunt expedita eum tenetur dicta distinctio enim? Omnis
      suscipit sunt, pariatur reprehenderit quidem, minima nihil ex molestiae itaque consequatur
      quis cupiditate tempora dolorum inventore. Magni, accusantium quos iusto amet dolore modi
      itaque eum nisi ducimus impedit voluptatem totam deserunt, unde commodi incidunt ratione dolor
      ullam aliquam a ut. Est dignissimos provident nulla soluta commodi culpa tempora laboriosam
      dolorem maxime vero corporis modi minus nam alias reprehenderit delectus voluptatum atque
      aperiam deserunt doloribus, quae velit molestiae? Necessitatibus adipisci aliquid nemo veniam
      eveniet architecto numquam modi. Cum quia fuga illo mollitia. Reiciendis ipsa sint delectus
      natus. Cum eius adipisci ipsam vitae voluptatum hic cupiditate ipsa suscipit error sapiente
      perspiciatis omnis incidunt repellat reiciendis corrupti nobis facilis, quisquam rerum.
      Repellendus numquam laudantium id voluptatum minus placeat reiciendis molestiae. Ex libero
      adipisci voluptate temporibus magni possimus amet, doloribus placeat ipsum distinctio officiis
      recusandae animi, consequuntur sunt vel numquam autem officia, eaque dolor delectus nihil
      mollitia! Officiis et, atque distinctio blanditiis animi at? Neque blanditiis est, quas
      nostrum reiciendis laboriosam maxime sapiente exercitationem inventore, tempore, ducimus hic.
      Consequatur quaerat exercitationem eum ipsam vel minus. Dolor ipsa natus laboriosam quis
      veniam, sit dolore ut, saepe alias distinctio consectetur odio debitis ducimus rerum amet
      deserunt, est modi! Temporibus quas voluptate ab dignissimos voluptatem unde optio nostrum
      modi, tenetur numquam. Deleniti voluptate sed harum beatae consectetur esse neque obcaecati
      sequi incidunt sit libero voluptatem odit, veniam cum enim iure optio asperiores nostrum fuga
      officiis modi aut eligendi, natus et! Autem temporibus dolor nobis ipsam ad, libero aspernatur
      nulla distinctio explicabo illo exercitationem illum magni magnam voluptate voluptates
      perspiciatis quae voluptatem fuga id atque in architecto necessitatibus, suscipit laboriosam?
      Libero soluta tempore sit quibusdam, nihil maiores inventore impedit totam sed quod ad iure
      ipsam aspernatur? Quae veniam placeat delectus error ipsam veritatis reiciendis perspiciatis,
      ut nesciunt quasi praesentium ipsum in, cupiditate obcaecati quam reprehenderit sequi ratione
      iusto nulla omnis fugiat atque. Eum blanditiis vel itaque, tenetur unde placeat ab nobis quis
      sint! Perferendis maxime voluptatum repellat, sed quos veritatis doloribus adipisci
      laboriosam, culpa voluptate deleniti blanditiis dicta autem consequuntur perspiciatis
      aspernatur error? Dolore temporibus consectetur odio. Voluptatum, quibusdam sed. Iusto
      assumenda atque velit dignissimos, labore veritatis dolorem. Dolore facilis ab aspernatur
      mollitia tempore nemo fuga nisi ducimus laborum impedit! Nisi ut non impedit fugit! Libero eos
      ipsam delectus id doloremque fugit, autem beatae quisquam hic. Nam nemo dolore explicabo,
      ratione consectetur error labore distinctio, omnis corporis, eius magnam iste animi
      exercitationem blanditiis accusamus. Voluptatem, nostrum assumenda! Ut voluptatum animi nobis
      quos ratione libero corporis voluptatibus perspiciatis beatae, consequatur veritatis aut
      accusamus corrupti sit at odit fugit maiores inventore vitae cumque! Quo debitis eum labore
      deleniti itaque laboriosam sint id voluptates! Illum laboriosam earum obcaecati ratione veniam
      delectus ipsa voluptate, deserunt placeat tempore? Odit explicabo quis quas quae nemo possimus
      suscipit consectetur maiores illo. Labore, inventore. Atque nesciunt facilis ipsum libero,
      error maxime quas sed exercitationem tenetur quaerat eveniet animi perspiciatis aspernatur et
      nam autem dolores laudantium harum rerum tempore reiciendis cupiditate? Deserunt et aliquam
      ab, incidunt at beatae exercitationem enim soluta, eius nemo, impedit ratione quidem. Porro
      tenetur maxime magnam aliquid eaque possimus, asperiores iste facilis labore quae voluptatum
      nobis quam esse deleniti iure vitae architecto provident laborum at excepturi. Iusto,
      explicabo earum! Porro soluta dolor corporis, sed eum minus excepturi dolore minima mollitia
      culpa illum, nulla dolorum quod assumenda, architecto consequuntur. Iure vero sint autem
      dolores similique rerum officiis ullam, amet deserunt? Eius molestiae ullam quasi harum
      tenetur voluptates repellat officiis aspernatur esse, facilis amet temporibus illo rerum ex
      qui corrupti voluptas ab officia incidunt hic accusamus odio expedita. Aliquam rem obcaecati
      similique iste quod eveniet consequatur fugit reiciendis, sit sequi, cumque reprehenderit
      dicta dignissimos! Iusto aliquid, voluptas officiis quia quisquam eaque obcaecati in nam dicta
      molestias maiores possimus consequatur illum error voluptatum numquam, delectus tenetur
      voluptate ab doloremque, libero ullam quidem impedit quis? Asperiores ipsa eius ut aut
      corporis accusamus debitis eum odit beatae rerum nam atque ea recusandae, obcaecati quasi,
      officiis commodi minus. Exercitationem perferendis provident necessitatibus hic fugit?
      Eligendi odit sapiente asperiores temporibus nam rerum obcaecati officiis. Voluptates
      laboriosam iusto corporis impedit possimus nihil esse, vel sequi dignissimos inventore minus
      exercitationem delectus reiciendis eos, libero perspiciatis sed nam? Vel ab dolores officia
      itaque voluptate provident quaerat ipsum accusantium quo voluptatem delectus quia nam natus,
      earum, architecto qui quod voluptatibus eveniet unde nisi non reiciendis ratione harum
      perspiciatis? Voluptates omnis ducimus eligendi veritatis voluptas cumque molestias velit,
      illo unde, deleniti dolorem deserunt culpa quis tempora nisi soluta labore dignissimos tenetur
      ipsa debitis consectetur vitae expedita ex? Voluptate praesentium sequi facilis laborum
      recusandae, deleniti nisi ipsum vel cumque accusantium commodi veniam, accusamus neque saepe
      sunt doloribus. Quasi commodi veritatis eum saepe eius? Dolore inventore, nesciunt saepe
      quibusdam fuga odit est! Quod, veniam doloremque sunt necessitatibus quae quibusdam cumque
      velit repellendus deserunt voluptatum voluptatibus sint, eligendi ea eius provident voluptates
      corporis porro consectetur vitae, non nostrum. Ad, ipsa suscipit voluptatum perferendis
      ratione quam reprehenderit blanditiis ipsam quod veritatis iure delectus. Quos expedita quae
      ullam modi, provident non explicabo optio sed perferendis ratione ut iusto maxime animi beatae
      illum dignissimos exercitationem excepturi eveniet. Placeat, ducimus molestias tempora
      repellendus illo aliquam nobis. Voluptatibus ipsa possimus quo deleniti. Nulla quisquam, id
      maiores aperiam obcaecati consequuntur saepe nobis optio numquam vel officiis sapiente
      exercitationem esse. Exercitationem accusamus iste, modi nesciunt laudantium nobis enim
      explicabo, eos inventore consequuntur ipsam a tempore voluptate numquam maiores minima minus
      necessitatibus hic recusandae! Ab mollitia non asperiores, error vel facilis quasi!
      Perferendis saepe deserunt doloribus ea laborum!
    </Wrapper>
  );
}
