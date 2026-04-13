import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaEnvelope, FaCheck } from 'react-icons/fa';

const EMAIL = 'shamwana.uni.minerva.edu';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      style={{
        background: 'rgba(255, 255, 255, 0.82)',
        borderTop: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 -2px 16px rgba(0,0,0,0.04)',
      }}
      className="py-10"
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">© 2026 Jonathan Shamwana. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <SocialIcon url="https://linkedin.com/in/shamwana" bgColor="transparent" fgColor="rgba(55,65,81,0.75)" style={{ width: 36, height: 36 }} />
            <SocialIcon url="https://instagram.com/jonathanshamwana" bgColor="transparent" fgColor="rgba(55,65,81,0.75)" style={{ width: 36, height: 36 }} />
            <div className="relative flex items-center justify-center">
              <button
                onClick={handleEmailClick}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-50"
                style={{ color: 'rgba(55,65,81,0.75)', background: 'none', border: 'none', padding: 0 }}
                aria-label="Copy email address"
              >
                {copied ? <FaCheck size={18} style={{ color: 'rgba(55,65,81,0.75)' }} /> : <FaEnvelope size={18} />}
              </button>
              <span
                style={{
                  position: 'absolute',
                  bottom: '120%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  color: '#4B5563',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  opacity: copied ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                }}
              >
                Copied!
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
