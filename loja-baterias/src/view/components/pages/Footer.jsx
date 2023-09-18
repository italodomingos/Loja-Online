import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./Footer.module.css";

export default function footer() {
  return (
    <footer className="d-flex align-items-end">
      <div className="w-100 p-3 bg-red align-items-end mx-auto">
        <div className="bg-red d-flex justify-content-center">
          <ListGroup horizontal className="">
            <ListGroup.Item className="bg-red">
              <div>
                <h4 className="text-center mb-3">Contato</h4>
                <div className={styles.fontFooter}>
                  <p>
                    <span className="bold">Telefone:</span> (62) 3622-8634
                  </p>
                  <p>
                    <span className="bold">Whatsapp:</span> (62) 3622-8634
                  </p>
                  <p>
                    <span className="bold">Email: </span>
                    comercial@casadasbateriasgo.com.br
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-red">
              <h4 className="text-center mb-3">Sobre nós</h4>
              <div className={styles.fontFooter}>
                <p>
                  Somos especialistas na venda e auto-socorro de baterias
                  automotivas, baterias para motos, estacionárias, para ônibus e
                  caminhões, tratores e outros veículos pesados.
                </p>

                <p>
                  Possuímos uma extensa linha de baterias de várias marcas e
                  modelos, como baterias Heliar, Moura, AcDelco, Freedom, Cral,
                  dentre outras marcas.
                </p>

                <p>
                  Nossa equipe de consultores comerciais são especialistas no
                  ramo e estão preparados para oferecer a melhor solução entre
                  custo x benefício para a necessidade de nossos clientes, sejam
                  eles do varejo ou do atacado.
                </p>

                <p>
                  Possuímos um corpo técnico especializado e equipamentos de
                  última geração para sempre oferecer aos nossos clientes um
                  atendimento diferenciado e qualificado.
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="text-center mt-3">
          &copy; 2023 Excelência em Baterias Automotivas
        </div>
      </div>
    </footer>
  );
}
