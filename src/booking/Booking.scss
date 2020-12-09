@import "../index.scss";
.section-booking {
    padding: 15rem 0;
    background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 0.8));
}
.book {
    background-image: linear-gradient(105deg, rgba(white, 0.9) 0%, rgba(white, 0.9) 50%, transparent 50%),
        url(../img/nat-10.jpg);
    background-size: cover;
    width: 100%;
    margin: 0 auto;
    border-radius: 0.3rem;
    box-shadow: 0 1.5rem 4rem rgba(black, 0.15);
    @include respond(tab-land) {
        background-image: linear-gradient(105deg, rgba(white, 0.9) 0%, rgba(white, 0.9) 65%, transparent 65%),
            url(../img/nat-10.jpg);
    }
    @include respond(tab-port) {
        background-image: linear-gradient(to right, rgba(white, 0.9) 0%, rgba(white, 0.9) 100%), url(../img/nat-10.jpg);
    }
    &__form {
        width: 50%;
        height: 100%;
        padding: 4.5rem;
        @include respond(tab-land) {
            width: 65%;
        }
    }
}
.form {
    &__group:not(:last-child) {
        margin-bottom: 2rem;
    }
    &__input {
        font-size: 1.5rem;
        padding: 1rem 2rem;
        border-radius: 0.2rem;
        transition: all 0.3s;
        color: inherit;
        border: none;
        width: 90%;
        display: block;
        background-color: rgba(white, 0.5);
        font-family: inherit;
        border-bottom: 0.2rem solid transparent;
        @include respond(tab-port) {
            width: 100%;
        }
        &::-webkit-input-placeholder {
            color: #999;
        }
        &:focus {
            outline: none;
            border-bottom: 0.2rem solid rgba(40, 180, 131, 0.8);
            box-shadow: 0 1rem 2rem rgba(black, 0.2);
            &:invalid {
                border-bottom: 0.2rem solid #ff7730;
            }
        }
    }

    &__label {
        font-size: 1.2rem;
        margin-left: 2rem;
        font-weight: 700;
        margin-top: 0.7rem;
        display: block;
        transition: all 0.2s;
    }
    // + for first child if in between use ~
    &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }

    &__radio-group {
        width: 50%;
        display: inline-block;
        // @include respond(tab-port) {
        //     width: 100%;
        //     margin-bottom: 2rem;
        // }
    }
    &__radio-input {
        visibility: hidden;
    }
    &__radio-label {
        font-size: 1.5rem;
        cursor: pointer;
        position: relative;
        padding-left: 4.5rem;
    }
    &__radio-button {
        width: 3rem;
        height: 3rem;
        border: 0.5rem solid rgba(40, 180, 131, 0.8);
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 0rem;
        top: -0.4rem;

        &::after {
            content: "";
            display: block;
            height: 1.3rem;
            width: 1.3rem;
            border-radius: 50%;
            background-color: rgba(40, 180, 131, 0.8);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all 0.2s;
        }
    }
    &__radio-input:checked ~ &__radio-label &__radio-button::after {
        opacity: 1;
    }
}
