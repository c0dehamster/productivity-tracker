<script lang="ts">
    import clockShadowMobile from "../lib/images/clock_shadow_mobile.svg";
    import clockShadowTablet from "../lib/images/clock_shadow_tablet.svg";
</script>

<div
    class="clock"
    style="
        --clock-shadow-mobile: url({clockShadowMobile});
        --clock-shadow-tablet: url({clockShadowTablet});"
>
    <div class="clock__digits">
        <span class="clock__digits">25</span>
        <span class="clock__digits">20</span>
        <span class="clock__digits">15</span>
        <span class="clock__digits">10</span>
        <span class="clock__digits">5</span>
        <span class="clock__digits">0</span>
    </div>

    <div class="clock__face">
        <div class="hand"></div>
        <div class="clock__ring glass"></div>
    </div>

    <!-- The SVGs are not displayed and used purely as masks -->

    <svg viewBox="0 0 1 1" class="mask-mobile">
        <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="maskMobile">
                <path
                    d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5ZM0.11 0.5C0.11 0.715391 0.284609 0.89 0.5 0.89C0.715391 0.89 0.89 0.715391 0.89 0.5C0.89 0.284609 0.715391 0.11 0.5 0.11C0.284609 0.11 0.11 0.284609 0.11 0.5Z"
                    fill="black"
                />
            </clipPath>
        </defs>
    </svg>

    <svg viewBox="0 0 1 1" class="mask-tablet">
        <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="maskTablet">
                <path
                    d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5ZM0.0984375 0.5C0.0984375 0.721777 0.278223 0.901563 0.5 0.901563C0.721777 0.901563 0.901563 0.721777 0.901563 0.5C0.901563 0.278223 0.721777 0.0984375 0.5 0.0984375C0.278223 0.0984375 0.0984375 0.278223 0.0984375 0.5Z"
                    fill="black"
                />
            </clipPath>
        </defs>
    </svg>

    <div class="controls">
        <slot />
    </div>
</div>

<style>
    .clock {
        max-width: 46vh;
    }

    .clock__face {
        position: relative;

        border-radius: 50%;

        box-shadow: 0.25rem 0.25rem 2rem 0.25rem rgba(0, 0, 0, 0.1);
    }

    /* Fake shadow inside the ring */

    .clock__face::before {
        content: "";
        position: absolute;
        width: 78%;
        aspect-ratio: 1;
        border-radius: 50%;

        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;

        background-color: rgba(0, 0, 0, 0.1);
        background: radial-gradient(
            closest-side at center,
            rgba(0, 0, 0, 0) calc(100% - 1rem),
            rgba(0, 0, 0, 0.05)
        );
    }

    .hand {
        position: absolute;
        z-index: 10;

        width: 0.25rem;
        height: 40%;

        transform-origin: 50% 102%;

        transform: translateX(-50%) rotate(45deg);
        left: 50%;
        top: 8%;

        background-color: var(--color-primary-400);
        box-shadow: 0 0 1rem 0 var(--color-primary-400);
    }

    .clock__ring {
        aspect-ratio: 1;

        box-shadow: 0.25rem 0.25rem 2rem 0.25rem rgba(0, 0, 0, 0.1);

        clip-path: url(#maskMobile);
    }

    @media screen and (width > 40rem) {
        .clock {
            max-width: 60vh;
        }

        .clock__ring {
            clip-path: url(#maskTablet);
        }
    }
</style>
