import '../styles/intro.css';

const Intro = (props) => {
  return (
    <main className="intro">
      <section>
        <h1>Closer</h1>
        <h2><i>The operating system for <br/>sovereign communities</i></h2>
      </section>
      <section>
        <ol>
          <li>Data sovereignty</li>
          <li>Value distribution</li>
          <li>Digital + physical spaces for communities</li>
          <li>Platform owned collectively by stakeholders</li>
          <li>Regenerative cultural practices baked into the interface</li>
        </ol>
        <p className="mt-2">
          <a href="https://dev.closer.earth" className="btn-primary" target="_blank">
            Try the beta{' '}
            <img src="/images/icons/link.svg" width="22" alt="" />
          </a>
        </p>
      </section>
      <section>
        <p>Hop onto our <a rel="noreferrer" href="https://discord.gg/cSMRqCeS" target="_blank">Discord</a> or <a rel="noreferrer" href="https://t.me/+rdZvSdohTzs0Njlh" target="_blank">Telegram</a>.</p>
      </section>
    </main>
  );
}

export default Intro;
