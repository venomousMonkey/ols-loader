import React from 'react'

const CardSkeleton: React.FC = () => {
  return (
    <div className="card-skeleton-wrapper">
      <img
        src="/ols-loader/skeleton-dance-skeleton.gif"
        className="skeleton-gif left"
        alt=""
        aria-hidden="true"
      />

      <div className="card-skeleton" role="status" aria-label="Loading account card">
        <div className="skeleton skeleton--title" />
        <div className="skeleton skeleton--balance" />

        <div className="assets">
          <div className="asset">
            <div className="skeleton skeleton--avatar" />
            <div className="asset-lines">
              <div className="skeleton skeleton--line short" />
              <div className="skeleton skeleton--line long" />
            </div>
          </div>

          <div className="asset">
            <div className="skeleton skeleton--avatar" />
            <div className="asset-lines">
              <div className="skeleton skeleton--line short" />
              <div className="skeleton skeleton--line long" />
            </div>
          </div>

          <div className="asset">
            <div className="skeleton skeleton--avatar" />
            <div className="asset-lines">
              <div className="skeleton skeleton--line short" />
              <div className="skeleton skeleton--line long" />
            </div>
          </div>
        </div>
      </div>

      <img
        src="/ols-loader/skeleton-dance-skeleton.gif"
        className="skeleton-gif right"
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}

export default CardSkeleton
