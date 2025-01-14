import AgentRepository from './AgentRepository'
import AgentCommissionRepository from './AgentCommissionRepository'
import AgentAssignedApplianceRepository from './AgentAssignedApplianceRepository'
import AgentBalanceHistoryRepository from './AgentBalanceHistoryRepository'
import AgentChargeRepository from './AgentChargeRepository'
import AgentSoldApplianceRepository from './AgentSoldApplianceRepository'
import AgentTransactionRepository from './AgentTransactionRepository'
import AgentReceiptRepository from './AgentReceiptRepository'
import AssetRepository from './AssetRepository'
import AssetPersonRepository from './AssetPersonRepository'
import AssetRateRepository from './AssetRateRepository'
import AuthenticationRepository from './AuthenticationRepository'
import CountryRespository from './CountryRespository'
import CityRepository from './CityRepository'
import ConnectionTypeRepository from './ConnectionTypeRepository'
import ConnectionGroupsRepository from './ConnectionGroupsRepository'
import ClusterRepository from './ClusterRepository'
import MaintenanceRepository from './MaintenanceRepository'
import MappingRepository from './MappingRepository'
import MeterRepository from './MeterRepository'
import MiniGridRepository from './MiniGridRepository'
import PersonRepository from './PersonRepository'
import RevenueRepository from './RevenueRepository'
import RestrictionRepository from './RestrictionRepository'
import SmsRepository from './SmsRepository'
import SubConnectionTypeRepository from './SubConnectionTypeRepository'
import TariffRepository from './TariffRepository'
import TicketRepository from './TicketRepository'
import TransactionRepository from './TransactionRepository'
import TicketCommentRepository from './TicketCommentRepository'
import TicketTrelloRepository from './TicketTrelloRepository'
import TicketUserRepository from './TicketUserRepository'
import TicketLabelRepository from './TicketLabelRepository'
import MeterTypeRepository from './MeterTypeRepository'
import UserRepository from './UserRepository'
import ReportsRepository from './ReportsRepository'
import BookKeepingRepository from './BookKeepingRepository'
import TimeOfUsageRepository from './TimeOfUsageRepository'
import GenerationAssetsRepository from './GenerationAssetsRepository'
import AddressRepository from './AddressRepository'
import UserTransactionsRepository from './UserTransactionsRepository'
import MeterParameterRepository from './MeterParameterRepository'
import TransactionProvidersRepository from './TransactionProvidersRepository'
import MainSettingsRepository from './MainSettingsRepository'
import MapSettingsRepository from './MapSettingsRepository'
import CurrencyRepository from './CurrencyRepository'
import LanguagesRepository from './LanguagesRepository'
import TicketSettingsRepository from './TicketSettingsRepository'
import CountriesRepository from './CountriesRepository'
import SmsBodiesRepository from './SmsBodiesRepository'
import SmsResendInformationKeyRepository from './SmsResendInformationKeyRepository'
import SmsApplianceRemindRateRepository from './SmsApplianceRemindRateRepository'
import SmsAndroidSettingRepository from './SmsAndroidSettingRepository'
import SmsVariableDefaultValueRepository from './SmsVariableDefaultValueRepository'
import PaymentHistoryRepository from './PaymentHistoryRepository'
import BatchRevenueRepository from './BatchRevenueRepository'
import TargetRepository from './TargetRepository'
import MeterDetailRepository from './MeterDetailRepository'
import UserPasswordRepository from './UserPasswordRepository'
import AppliancePaymentRepository from './AppliancePaymentRepository'

const repositories = {
    'address': AddressRepository,
    'asset': AssetRepository,
    'assetPerson': AssetPersonRepository,
    'assetRate': AssetRateRepository,
    'authentication': AuthenticationRepository,
    'agent': AgentRepository,
    'assignedAppliance': AgentAssignedApplianceRepository,
    'agentTransactions': AgentTransactionRepository,
    'agentReceipt': AgentReceiptRepository,
    'balanceHistory': AgentBalanceHistoryRepository,
    'balanceCharge': AgentChargeRepository,
    'cluster': ClusterRepository,
    'connectionTypes': ConnectionTypeRepository,
    'connectionGroups': ConnectionGroupsRepository,
    'city': CityRepository,
    'country': CountryRespository,
    'commission': AgentCommissionRepository,
    'maintenance': MaintenanceRepository,
    'minigrid': MiniGridRepository,
    'map': MappingRepository,
    'meter': MeterRepository,
    'meterType': MeterTypeRepository,
    'meterParameter': MeterParameterRepository,
    'person': PersonRepository,
    'revenue': RevenueRepository,
    'restriction': RestrictionRepository,
    'sms': SmsRepository,
    'soldAppliance': AgentSoldApplianceRepository,
    'subConnectionTypes': SubConnectionTypeRepository,
    'transaction': TransactionRepository,
    'tariff': TariffRepository,
    'ticket': TicketRepository,
    'ticketComment': TicketCommentRepository,
    'ticketTrello': TicketTrelloRepository,
    'ticketUser': TicketUserRepository,
    'ticketLabel': TicketLabelRepository,
    'user': UserRepository,
    'userTransactions': UserTransactionsRepository,
    'reports': ReportsRepository,
    'bookKeeping': BookKeepingRepository,
    'timeOfUsage': TimeOfUsageRepository,
    'generationAssets': GenerationAssetsRepository,
    'transactionProviders': TransactionProvidersRepository,
    'mainSettings': MainSettingsRepository,
    'mapSettings': MapSettingsRepository,
    'currencyList': CurrencyRepository,
    'countryList': CountriesRepository,
    'languagesList': LanguagesRepository,
    'ticketSettings': TicketSettingsRepository,
    'smsBodies':SmsBodiesRepository,
    'smsResendInformationKeys':SmsResendInformationKeyRepository,
    'smsApplianceRemindRates':SmsApplianceRemindRateRepository,
    'smsAndroidSetting':SmsAndroidSettingRepository,
    'smsVariableDefaultValue':SmsVariableDefaultValueRepository,
    'target': TargetRepository,
    'batchRevenue': BatchRevenueRepository,
    'paymentHistory': PaymentHistoryRepository,
    'meterDetail': MeterDetailRepository,
    'userPassword': UserPasswordRepository,
    'appliancePayment': AppliancePaymentRepository
}

export default {
    get: name => repositories[name],
}
