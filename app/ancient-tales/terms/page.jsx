import { wrap, inner, brand, h1, sub, h2, p, ul, nav, navLink, footer } from '../styles';

export const metadata = {
  title: 'Terms of Service — Ancient Tales Publisher',
  description: 'Terms of service for the Ancient Tales Publisher internal automation tool.',
};

export default function TermsOfService() {
  return (
    <div style={wrap}>
      <div style={inner}>
        <div style={brand}>Shivanchal · Internal Tool</div>
        <h1 style={h1}>Terms of Service</h1>
        <p style={sub}>Ancient Tales Publisher · Last updated 16 July 2026</p>

        <div style={nav}>
          <a href="/ancient-tales" style={navLink}>Overview</a>
          <a href="/ancient-tales/privacy" style={navLink}>Privacy Policy</a>
        </div>

        <h2 style={h2}>Scope</h2>
        <p style={p}>
          Ancient Tales Publisher is a private automation tool built and
          operated by Shivanchal for a single content channel. It is not
          offered as a public service, is not available for sign-up by other
          users, and these terms exist only to satisfy the requirements of
          the third-party platforms (Google, Meta) the tool connects to.
        </p>

        <h2 style={h2}>Use of the tool</h2>
        <ul style={ul}>
          <li>The tool is used exclusively by its operator to publish the operator's own video content across the operator's own YouTube, Facebook and Instagram accounts.</li>
          <li>The tool does not accept content, credentials, or data from anyone other than its operator.</li>
          <li>The tool is provided "as is", without warranty of any kind, and may be modified, paused, or discontinued at any time without notice.</li>
        </ul>

        <h2 style={h2}>Third-party platforms</h2>
        <p style={p}>
          Use of the tool is also subject to the terms of service of the
          platforms it connects to, including Google's API Services User Data
          Policy, the Meta Platform Terms, and YouTube's Terms of Service. The
          operator is responsible for complying with those terms when using
          this tool.
        </p>

        <h2 style={h2}>Liability</h2>
        <p style={p}>
          Shivanchal is not liable for any loss, damage, or account action
          arising from use of this tool, including but not limited to
          platform rate limits, content policy decisions made by Google, Meta
          or YouTube, or service interruptions.
        </p>

        <h2 style={h2}>Governing law</h2>
        <p style={p}>These terms are governed by the laws of India.</p>

        <h2 style={h2}>Contact</h2>
        <p style={p}>Questions about these terms can be sent to ankitdubey.aitech@gmail.com.</p>

        <div style={footer}>
          <p>Shivanchal · Bhopal, Madhya Pradesh, India</p>
        </div>
      </div>
    </div>
  );
}
