import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CreateEvent from '../screens/events/CreateEvent';

describe('CreateEvent component', () => {
  it('cria um evento', () => {
    const mockAddEvent = jest.fn();
    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <CreateEvent addEvent={mockAddEvent} navigation={mockNavigation} />
    );

    const nome = 'Evento de teste'
    const descricao = 'Descrição'
    const local = 'Localização'
    const informacoes_adicionais = 'Coisas a mais'

    // Simula o input do usuário
    fireEvent.changeText(getByPlaceholderText('Nome do Evento'), nome);
    fireEvent.changeText(getByPlaceholderText('Descrição'), descricao);
    fireEvent.changeText(getByPlaceholderText('Local'), local);
    fireEvent.changeText(getByPlaceholderText('Informações Adicionais'), informacoes_adicionais);

    // Aciona o perssionar do botão
    fireEvent.press(getByText('Adicionar Evento'));

    // Verifica se adicionar evento foi chamada com os argumentos corretos
    expect(mockAddEvent).toHaveBeenCalledWith(nome, descricao, local, informacoes_adicionais);

    // Verifica se navigation foi chamado com o argumento correto
    expect(mockNavigation.navigate).toHaveBeenCalledWith('IndexEvents');
  });
  it('não consegue criar um evento sem nome', () => {
    const mockAddEvent = jest.fn();
    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <CreateEvent addEvent={mockAddEvent} navigation={mockNavigation} />
    );

    const nome = ''
    const descricao = 'Descrição'
    const local = 'Localização'
    const informacoes_adicionais = 'Coisas a mais'

    // Simula o input do usuário
    fireEvent.changeText(getByPlaceholderText('Nome do Evento'), nome);
    fireEvent.changeText(getByPlaceholderText('Descrição'), descricao);
    fireEvent.changeText(getByPlaceholderText('Local'), local);
    fireEvent.changeText(getByPlaceholderText('Informações Adicionais'), informacoes_adicionais);

    // Aciona o perssionar do botão
    fireEvent.press(getByText('Adicionar Evento'));

    // Verifica que a função para criar o evento não foi criada
    expect(mockAddEvent).not.toHaveBeenCalled()
  });
  it('não consegue criar um evento sem descrição', () => {
    const mockAddEvent = jest.fn();
    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <CreateEvent addEvent={mockAddEvent} navigation={mockNavigation} />
    );

    const nome = 'Evento de teste'
    const descricao = ''
    const local = 'Localização'
    const informacoes_adicionais = 'Coisas a mais'

    // Simula o input do usuário
    fireEvent.changeText(getByPlaceholderText('Nome do Evento'), nome);
    fireEvent.changeText(getByPlaceholderText('Descrição'), descricao);
    fireEvent.changeText(getByPlaceholderText('Local'), local);
    fireEvent.changeText(getByPlaceholderText('Informações Adicionais'), informacoes_adicionais);

    // Aciona o perssionar do botão
    fireEvent.press(getByText('Adicionar Evento'));

    // Verifica que a função para criar o evento não foi criada
    expect(mockAddEvent).not.toHaveBeenCalled()
  });
  it('não consegue criar um evento sem localização', () => {
    const mockAddEvent = jest.fn();
    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <CreateEvent addEvent={mockAddEvent} navigation={mockNavigation} />
    );

    const nome = 'Evento de teste'
    const descricao = 'Descrição'
    const local = ''
    const informacoes_adicionais = 'Coisas a mais'

    // Simula o input do usuário
    fireEvent.changeText(getByPlaceholderText('Nome do Evento'), nome);
    fireEvent.changeText(getByPlaceholderText('Descrição'), descricao);
    fireEvent.changeText(getByPlaceholderText('Local'), local);
    fireEvent.changeText(getByPlaceholderText('Informações Adicionais'), informacoes_adicionais);

    // Aciona o perssionar do botão
    fireEvent.press(getByText('Adicionar Evento'));

    // Verifica que a função para criar o evento não foi criada
    expect(mockAddEvent).not.toHaveBeenCalled()
  });
  it('não consegue criar um evento sem informações adicionais', () => {
    const mockAddEvent = jest.fn();
    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <CreateEvent addEvent={mockAddEvent} navigation={mockNavigation} />
    );

    const nome = 'Evento de teste'
    const descricao = 'Descrição'
    const local = 'Localização'
    const informacoes_adicionais = ''

    // Simula o input do usuário
    fireEvent.changeText(getByPlaceholderText('Nome do Evento'), nome);
    fireEvent.changeText(getByPlaceholderText('Descrição'), descricao);
    fireEvent.changeText(getByPlaceholderText('Local'), local);
    fireEvent.changeText(getByPlaceholderText('Informações Adicionais'), informacoes_adicionais);

    // Aciona o perssionar do botão
    fireEvent.press(getByText('Adicionar Evento'));

    // Verifica que a função para criar o evento não foi criada
    expect(mockAddEvent).not.toHaveBeenCalled()
  })
});
