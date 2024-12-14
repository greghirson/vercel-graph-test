
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-14 06:00:00", "b": 524.5}, {"a": "2024-12-14 06:05:00", "b": 531.2}, {"a": "2024-12-14 06:10:00", "b": 527.5}, {"a": "2024-12-14 06:15:00", "b": 529.2}, {"a": "2024-12-14 06:20:00", "b": 527.0}, {"a": "2024-12-14 06:25:00", "b": 527.8}, {"a": "2024-12-14 06:30:00", "b": 544.0}, {"a": "2024-12-14 06:35:00", "b": 541.5}, {"a": "2024-12-14 06:40:00", "b": 535.5}, {"a": "2024-12-14 06:45:00", "b": 538.5}, {"a": "2024-12-14 06:50:00", "b": 546.5}, {"a": "2024-12-14 06:55:00", "b": 545.0}, {"a": "2024-12-14 07:00:00", "b": 534.0}, {"a": "2024-12-14 07:05:00", "b": 536.0}, {"a": "2024-12-14 07:10:00", "b": 542.8}, {"a": "2024-12-14 07:15:00", "b": 551.0}, {"a": "2024-12-14 07:20:00", "b": 540.0}, {"a": "2024-12-14 07:25:00", "b": 539.6}, {"a": "2024-12-14 07:30:00", "b": 532.0}, {"a": "2024-12-14 07:35:00", "b": 537.5}, {"a": "2024-12-14 07:40:00", "b": 546.0}, {"a": "2024-12-14 07:45:00", "b": 543.2}, {"a": "2024-12-14 07:50:00", "b": 546.5}, {"a": "2024-12-14 07:55:00", "b": 533.4}, {"a": "2024-12-14 08:00:00", "b": 515.6}, {"a": "2024-12-14 08:05:00", "b": 530.25}, {"a": "2024-12-14 08:10:00", "b": 537.0}, {"a": "2024-12-14 08:15:00", "b": 531.4}, {"a": "2024-12-14 08:20:00", "b": 523.0}, {"a": "2024-12-14 08:25:00", "b": 530.3333333333334}, {"a": "2024-12-14 08:30:00", "b": 536.2}, {"a": "2024-12-14 08:35:00", "b": 570.8}, {"a": "2024-12-14 08:40:00", "b": 625.25}, {"a": "2024-12-14 08:45:00", "b": 631.75}, {"a": "2024-12-14 08:50:00", "b": 640.8}, {"a": "2024-12-14 08:55:00", "b": 650.6}, {"a": "2024-12-14 09:00:00", "b": 644.0}, {"a": "2024-12-14 09:05:00", "b": 644.0}, {"a": "2024-12-14 09:10:00", "b": 691.2}, {"a": "2024-12-14 09:15:00", "b": 730.2}, {"a": "2024-12-14 09:20:00", "b": 708.0}, {"a": "2024-12-14 09:25:00", "b": 716.0}, {"a": "2024-12-14 09:30:00", "b": 743.6}, {"a": "2024-12-14 09:35:00", "b": 736.4}, {"a": "2024-12-14 09:40:00", "b": 761.8}, {"a": "2024-12-14 09:45:00", "b": 782.4}, {"a": "2024-12-14 09:50:00", "b": 731.2}, {"a": "2024-12-14 09:55:00", "b": 682.4}, {"a": "2024-12-14 10:00:00", "b": 671.4}, {"a": "2024-12-14 10:05:00", "b": 678.0}, {"a": "2024-12-14 10:10:00", "b": 658.4}, {"a": "2024-12-14 10:15:00", "b": 647.2}, {"a": "2024-12-14 10:20:00", "b": 659.2}, {"a": "2024-12-14 10:25:00", "b": 664.5}, {"a": "2024-12-14 10:30:00", "b": 660.25}, {"a": "2024-12-14 10:35:00", "b": 651.8}, {"a": "2024-12-14 10:40:00", "b": 655.8}, {"a": "2024-12-14 10:45:00", "b": 630.2}, {"a": "2024-12-14 10:50:00", "b": 630.6}, {"a": "2024-12-14 10:55:00", "b": 620.6}, {"a": "2024-12-14 11:00:00", "b": 608.8}, {"a": "2024-12-14 11:05:00", "b": 611.0}, {"a": "2024-12-14 11:10:00", "b": 600.2}, {"a": "2024-12-14 11:15:00", "b": 575.0}, {"a": "2024-12-14 11:20:00", "b": 560.8}, {"a": "2024-12-14 11:25:00", "b": 557.2}, {"a": "2024-12-14 11:30:00", "b": 562.2}, {"a": "2024-12-14 11:35:00", "b": 558.5}, {"a": "2024-12-14 11:40:00", "b": 555.5}, {"a": "2024-12-14 11:45:00", "b": 560.2}, {"a": "2024-12-14 11:50:00", "b": 545.6666666666666}, {"a": "2024-12-14 11:55:00", "b": 538.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    