import { useState } from 'react';

const LikeDislike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [name, setName] = useState('Ragul');

  const handleLike = () => setLikeCount(likeCount + 1);
  const handleDislike = () => setDislikeCount(dislikeCount + 1);
  const resetCounts = () => {
    setLikeCount(0);
    setDislikeCount(0);
  };
  const toggleName = () =>
    setName(name === 'Ragul' ? 'Shandeep' : 'Ragul');

  return (
    <div className="card slide-up">
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--gray-900)',
        marginBottom: 'var(--spacing-6)',
        textAlign: 'center'
      }}>
        👍👎 Like and Dislike Counter
      </h2>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-8)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-6)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--success-color)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Likes: {likeCount}
          </p>
          <button 
            onClick={handleLike}
            className="btn btn-primary"
            style={{ minWidth: '100px' }}
          >
            👍 Like
          </button>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--error-color)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Dislikes: {dislikeCount}
          </p>
          <button 
            onClick={handleDislike}
            className="btn btn-secondary"
            style={{ minWidth: '100px' }}
          >
            👎 Dislike
          </button>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-4)',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={resetCounts}
          className="btn btn-secondary"
        >
          🔄 Reset Counts
        </button>
        <button 
          onClick={toggleName}
          className="btn btn-primary"
        >
          🔄 Toggle Name: {name}
        </button>
      </div>
    </div>
  );
};

export default LikeDislike; 