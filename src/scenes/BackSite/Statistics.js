import React, { Component } from 'react';

// import Navigation from '../../containers/Navigation';
import WrapperBackSite from '../../containers/Wrapper/BackSite';
import FormGroup from '../../components/Form/Widgets/FormGroup';
import DownloadPDF from '../../components/Button/DownloadPDF';
import DownloadCSV from '../../components/Button/DownloadCSV';
import DownloadTickets from '../../components/Button/DownloadTickets';
import DownloadInvoice from '../../components/Button/DownloadInvoice';
import Title from '../../components/Title';
import List from '../../components/List';
import Divider from '../../components/Divider';
import QuestionAnswer from '../../containers/QuestionAnswer';
import DataTable from '../../containers/DataTable';
import Notes from '../../containers/Notes';

import notes from '../../data/backsite/statistics/notes.json';
import lastEventsNotes from '../../data/backsite/statistics/last-events__notes.json';
import unusedTickets from '../../data/backsite/statistics/unused-tickets.json';
import previousTickets from '../../data/backsite/statistics/previous-tickets.json';

class Statistics extends Component {
  render() {
    return (
      <WrapperBackSite
        breadcrumbsPath={{
          1: {
            label: 'Събития',
          },
          2: {
            label: 'Виртуоз в продажбите',
          },
          3: {
            label: 'Статистика',
          },
          4: {
            label: '102273222 (номер на поръчка)',
          },
        }}
      >
        <div className="pull-right">
          <DownloadPDF />
          <DownloadCSV last />
        </div>
        <div className="clearfix" />
        <FormGroup label="Информация">
          <Title type="h3">
            За клиента
          </Title>
          <div className="row">
            <div className="col-xs-9">
              <List
                maxColumns={2}
                items={[
                  {
                    label: 'Име',
                    text: 'Иван Иванов',
                  },
                  {
                    label: 'E-mail',
                    text: 'ivan.test@test.bg',
                  },
                  {
                    label: 'Телефон',
                    text: '0899 58 41 38',
                  },
                  {
                    label: 'Фактура',
                    text: 'да',
                  },
                ]}
              />
            </div>
            <div className="col-xs-3" />
          </div>
          <Divider />
          <Title type="h3">
            За поръчката
          </Title>
          <div className="row">
            <div className="col-xs-9">
              <List
                maxColumns={2}
                items={[
                  {
                    label: 'Поръчка №',
                    text: '4560',
                  },
                  {
                    label: 'Билет №',
                    text: '4560',
                  },
                  {
                    label: 'Брой билети',
                    text: '1',
                  },
                  {
                    label: 'Име на билет',
                    text: 'Няма',
                  },
                ]}
              />
            </div>
            <div className="col-xs-3">
              <DownloadTickets inverse />
            </div>
          </div>
          <Divider />
          <Title type="h3">
            За фактурата
          </Title>
          <div className="row">
            <div className="col-xs-9">
              <List
                maxColumns={2}
                items={[
                  {
                    label: 'Получател',
                    text: 'Inteleksys Ltd',
                  },
                  {
                    label: 'ЕИК №',
                    text: '203082449',
                  },
                  {
                    label: 'Град',
                    text: 'гр. София',
                  },
                  {
                    label: 'ДДС №',
                    text: 'BG203082449',
                  },
                  {
                    label: 'МОЛ',
                    text: 'ПАВЕЛ ХРИСКОВ',
                  },
                  {
                    label: 'Адрес',
                    text: 'ул. “Йордан Йосифов” № 80',
                  },
                ]}
              />
            </div>
            <div className="col-xs-3">
              <DownloadInvoice inverse />
            </div>
          </div>
        </FormGroup>
        <FormGroup label="Бележки">
          <Notes data={notes} editable />
        </FormGroup>
        <FormGroup label="Информация за анкета">
          <QuestionAnswer
            items={[
              {
                question: 'Ще си носите ли помощни материали?',
                answer: 'Не, няма да нося.',
              },
              {
                question: 'Ще си носите ли помощни материали?',
                answer: 'Не, няма да нося.',
              },
              {
                question: 'Ще си носите ли помощни материали?',
                answer: 'Не, няма да нося.',
              },
              {
                question: 'Ще си носите ли помощни материали?',
                answer: 'Не, няма да нося.',
              },
            ]}
          />
        </FormGroup>
        <Title
          className="m-t-md m-b-xl"
          border
          type="h2"
        >
          ИНФОРМАЦИЯ ЗА ТОЗИ ПОТРЕБИТЕЛ ЗА ВСИЧКИ СЪБИТИЯ
        </Title>
        <FormGroup label="Информация за предишни покупки">
          <Title type="h3">
            За кои събития е купил
          </Title>
          <List
            maxColumns={1}
            labeled
            items={[
              {
                label: 'Брой билети',
                text: '100 бр.',
              },
              {
                label: 'Сума общо',
                text: '100 бр.',
              },
            ]}
          />
        </FormGroup>
        <FormGroup label="Неизползвани билети">
          <DataTable
            headings={unusedTickets.headings}
            items={unusedTickets.items}
          />
        </FormGroup>
        <FormGroup label="Всички предишни">
          <DataTable
            headings={previousTickets.headings}
            items={previousTickets.items}
          />
        </FormGroup>
        <FormGroup label="Бележки от изминали събития">
          <Notes data={lastEventsNotes} />
        </FormGroup>
        <div className="pull-right">
          <DownloadPDF inverse />
          <DownloadCSV inverse last />
        </div>
        <div className="clearfix" />
      </WrapperBackSite>
    );
  }
}

export default Statistics;
