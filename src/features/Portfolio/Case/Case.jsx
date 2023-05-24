import React from 'react';
import Fade from 'react-reveal/Fade';
import {useWindowSize} from '../../Scripts/ChangeScreen/changeScreen';
import prorab from './../../../assets/images/case/Prorab.webp';
import prorab_mob from './../../../assets/images/case/Prorab_mob.webp';
import gs from './../../../assets/images/case/gs.webp';
import gs_mob from './../../../assets/images/case/gs_mob.webp';
import campy from './../../../assets/images/case/campy.webp';
import campy_mob from './../../../assets/images/case/campy_mob.webp';
import koala from './../../../assets/images/case/koala.webp';
import koala_mob from './../../../assets/images/case/koala_mob.webp';
import lawthor_mob from './../../../assets/images/case/lawthor_mob.webp';
import lawthor from './../../../assets/images/case/lawthor.webp';
import gourmet_mob from './../../../assets/images/case/gourmet_mob.webp';
import gourmet from './../../../assets/images/case/gourmet.webp';
import viebeg_mob from './../../../assets/images/case/viebeg_mob.webp';
import viebeg from './../../../assets/images/case/viebeg.webp';
import ottoQuant_mob from './../../../assets/images/case/ottoQuant_mob.webp';
import ottoQuant from './../../../assets/images/case/ottoQuant.webp';
import bizard_system_mob from './../../../assets/images/case/bizard_system_mob.webp';
import bizard_system from './../../../assets/images/case/bizard_system.webp';
import bizard_tunnel_mob from './../../../assets/images/case/bizard_tunnel_mob.webp';
import bizard_tunnel from './../../../assets/images/case/bizard_tunnel.webp';
import rocket_labs_mob from './../../../assets/images/case/rocket_labs_mob.webp';
import rocket_labs from './../../../assets/images/case/rocket_labs.webp';
import crypto_community_monitoring_mob from './../../../assets/images/case/crypto_community_monitoring_mob.webp';
import crypto_community_monitoring from './../../../assets/images/case/crypto_community_monitoring.webp';
import aergo_mob from './../../../assets/images/case/aergo_mob.webp';
import aergo from './../../../assets/images/case/aergo.webp';
import hodlWeek_mob from './../../../assets/images/case/hodlWeek_mob.webp';
import hodlWeek from './../../../assets/images/case/hodlWeek.webp';
import crypto_payments_mob from './../../../assets/images/case/crypto_payments_mob.webp';
import crypto_payments from './../../../assets/images/case/crypto_payments.webp';
import red_bus_mob from './../../../assets/images/case/red_bus_mob.webp';
import red_bus from './../../../assets/images/case/red_bus.webp';
import cherry_date_mob from './../../../assets/images/case/cherry_date_mob.webp';
import cherry_date from './../../../assets/images/case/cherry_date.webp';
import crypt2p_mob from './../../../assets/images/case/crypt2p_mob.webp';
import crypt2p from './../../../assets/images/case/crypt2p.webp';
import styles from './Case.module.scss';

const Case = () => {
    const mediaWidth = useWindowSize();

    const case_studies = [
        {
            case_image: prorab,
            case_mobile_image:prorab_mob,
            project_link: 'https://prorab.group/',
            header_title:'Prorab',
        },
        {
            case_image: gs,
            case_mobile_image: gs_mob,
            project_link: 'https://app.gaming-stars.net/',
            header_title:'GAMING STARS',
        },
        {
            case_image: campy,
            case_mobile_image: campy_mob,
            project_link: 'https://campy.4-com.pro/',
            header_title:'CAMPY',
        },
        {
            case_image: koala,
            case_mobile_image: koala_mob,
            project_link: 'https://app.koaladesk.com/auth/login',
            header_title:'KOALA DESK',
        },
        {
            case_image: lawthor,
            case_mobile_image: lawthor_mob,
            project_link: 'https://lawthor.com/',
            header_title:'LawThor',
        },
        {
            case_image: gourmet,
            case_mobile_image: gourmet_mob,
            project_link: 'https://user.gourmetpt.com/',
            header_title:'Gourmet PT',
        },
        {
            case_image: viebeg,
            case_mobile_image: viebeg_mob,
            project_link: 'https://client.vieprocure.com/',
            header_title:'Viebeg App Service',
        },
        {
            case_image: ottoQuant,
            case_mobile_image: ottoQuant_mob,
            header_title:'OttoQuant',
        },
        {
            case_image: bizard_system,
            case_mobile_image: bizard_system_mob,
            header_title:'Bizard System',
        },
        {
            case_image: bizard_tunnel,
            case_mobile_image: bizard_tunnel_mob,
            header_title:'Bizard Tunnel',
        },
        {
            case_image: rocket_labs,
            case_mobile_image: rocket_labs_mob,
            header_title:'Rocket Labs',
        },
        {
            case_image: crypto_community_monitoring,
            case_mobile_image: crypto_community_monitoring_mob,
            header_title:'Crypto Сommunity Monitoring',
        },
        {
            case_image: aergo,
            case_mobile_image: aergo_mob,
            header_title:'AERGO',
        },
        {
            case_image: hodlWeek,
            case_mobile_image: hodlWeek_mob,
            project_link: 'HodlWeek',
        },
        {
            case_image: crypto_payments,
            case_mobile_image: crypto_payments_mob,
            header_title:'Crypto Payments',
        },
        {
            case_image: red_bus,
            case_mobile_image: red_bus_mob,
            header_title:'RED BUS',
        },
        {
            case_image: cherry_date,
            case_mobile_image: cherry_date_mob,
            project_link: 'https://cherrybot.app',
            header_title:'Cherry Date',
        },
        {
            case_image: crypt2p,
            case_mobile_image: crypt2p_mob,
            project_link: 'https://client.globixcash.4-com.pro',
            header_title:'Crypt2p',
        },
        {
            case_image:'owlab',
            case_mobile_image:'owlab',
            project_link: 'owlab',
            header_title:'owlab',
        },
    ]

    return (
        <div className={`${styles.case}`}>
            <div className={`${styles['row']}`} id={`${styles['item']}`}>
                {case_studies && case_studies.map(
                    ({id, case_image, case_mobile_image, header_title, project_link}, idx) => (
                        <div key={id}>
                            <Fade bottom>
                                <a href={`${project_link}`} target='_blank'>
                                    <div className={`${styles['img']}`}>
                                        {mediaWidth > 768
                                            ? case_image &&
                                            case_mobile_image && (
                                                <span className={styles.case_image}>
                                      <img
                                          alt='images'
                                          width={(idx + 1) % 3 === 0 ? 1196 : 568}
                                          height={(idx + 1) % 3 === 0 ? 630 : 698}
                                          src={(idx + 1) % 3 === 0 ? case_image : case_mobile_image}
                                      />
                                    </span>
                                            )
                                            : case_mobile_image && (
                                            <span className={styles.case_image}>
                                      <img
                                          width={450}
                                          height={543}
                                          alt='owlab.group. Gourmet'
                                          src={case_mobile_image}
                                      />
                                    </span>
                                        )}
                                    </div>
                                    <div className={`${styles['text_case_block']}`}>
                                        <span>{header_title}</span>
                                        <div className={`${styles['case_description']}`}>{header_title}</div>
                                    </div>
                                </a>
                            </Fade>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Case;
