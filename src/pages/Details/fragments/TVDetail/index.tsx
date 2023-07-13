import Pill from 'components/Pill';
import Avatar from 'components/Avatar';
import { Wrapper /* , ContentCard */ } from './styles';

export default function TVDetail() {
  return (
    <Wrapper>
      <div id="metadatas">
        <h3>Genres</h3>
        <div>
          <Pill />
          <Pill />
          <Pill />
          <Pill />
          <Pill />
          <Pill />
        </div>
      </div>
      <div id="metadatas">
        <h3>Production of</h3>
        <div>
          <Pill />
          <Pill />
          <Pill />
          <Pill />
          <Pill />
          <Pill />
        </div>
      </div>
      <div id="metadatas">
        <h3>1 Season • 6 Episodes</h3>
      </div>
      <div id="metadatas">
        <h3>Next episode</h3>
        <div>{/* <ContentCard /> */}</div>
      </div>
      <div id="metadatas">
        <h3>Credits</h3>
        <div>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </div>
      <div id="metadatas">
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic officiis consequuntur,
          inventore libero eos saepe aspernatur perspiciatis sapiente consectetur, repellendus
          exercitationem minima iure illo numquam laborum vel. Molestias repudiandae ipsum nulla
          labore repellat incidunt, dolorem eos perspiciatis officiis molestiae reiciendis, omnis
          quisquam ex? Nam dolores, nisi vitae odit, rem ducimus nulla excepturi quibusdam
          voluptatem quod repellat ipsa eius corrupti cupiditate necessitatibus quae commodi velit
          eum, laboriosam saepe ut. Eum sit quia saepe ratione sunt doloremque dolor rem at
          aspernatur, ab hic consectetur dolorum eaque ipsam blanditiis obcaecati, eligendi
          reprehenderit quam molestias explicabo tenetur accusantium? Perspiciatis sapiente
          blanditiis doloribus beatae?
        </p>
      </div>
    </Wrapper>
  );
}
