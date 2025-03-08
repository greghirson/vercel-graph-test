
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-08 07:00:00", "b": 518.0}, {"a": "2025-03-08 07:05:00", "b": 529.75}, {"a": "2025-03-08 07:10:00", "b": 537.2}, {"a": "2025-03-08 07:15:00", "b": 539.6}, {"a": "2025-03-08 07:20:00", "b": 552.8}, {"a": "2025-03-08 07:25:00", "b": 545.75}, {"a": "2025-03-08 07:30:00", "b": 551.8333333333334}, {"a": "2025-03-08 07:35:00", "b": 566.6}, {"a": "2025-03-08 07:40:00", "b": 554.2}, {"a": "2025-03-08 07:45:00", "b": 551.25}, {"a": "2025-03-08 07:50:00", "b": 552.8}, {"a": "2025-03-08 07:55:00", "b": 553.0}, {"a": "2025-03-08 08:00:00", "b": 547.75}, {"a": "2025-03-08 08:05:00", "b": 557.2}, {"a": "2025-03-08 08:10:00", "b": 541.4}, {"a": "2025-03-08 08:15:00", "b": 557.8}, {"a": "2025-03-08 08:20:00", "b": 597.2}, {"a": "2025-03-08 08:25:00", "b": 608.0}, {"a": "2025-03-08 08:30:00", "b": 614.8}, {"a": "2025-03-08 08:35:00", "b": 611.0}, {"a": "2025-03-08 08:40:00", "b": 650.8}, {"a": "2025-03-08 08:45:00", "b": 680.3333333333334}, {"a": "2025-03-08 08:50:00", "b": 681.5}, {"a": "2025-03-08 08:55:00", "b": 684.0}, {"a": "2025-03-08 09:00:00", "b": 680.0}, {"a": "2025-03-08 09:05:00", "b": 681.0}, {"a": "2025-03-08 09:10:00", "b": 680.8}, {"a": "2025-03-08 09:15:00", "b": 681.25}, {"a": "2025-03-08 09:20:00", "b": 678.6}, {"a": "2025-03-08 09:25:00", "b": 675.5}, {"a": "2025-03-08 09:30:00", "b": 649.6}, {"a": "2025-03-08 09:35:00", "b": 641.8}, {"a": "2025-03-08 09:40:00", "b": 642.5}, {"a": "2025-03-08 09:45:00", "b": 637.0}, {"a": "2025-03-08 09:50:00", "b": 632.6}, {"a": "2025-03-08 09:55:00", "b": 629.25}, {"a": "2025-03-08 10:00:00", "b": 647.4}, {"a": "2025-03-08 10:05:00", "b": 660.4}, {"a": "2025-03-08 10:10:00", "b": 690.25}, {"a": "2025-03-08 10:15:00", "b": 717.6}, {"a": "2025-03-08 10:20:00", "b": 740.4}, {"a": "2025-03-08 10:25:00", "b": 782.0}, {"a": "2025-03-08 10:30:00", "b": 819.4}, {"a": "2025-03-08 10:35:00", "b": 852.8}, {"a": "2025-03-08 10:40:00", "b": 881.6}, {"a": "2025-03-08 10:45:00", "b": 895.2}, {"a": "2025-03-08 10:50:00", "b": 1018.0}, {"a": "2025-03-08 10:55:00", "b": 1011.2}, {"a": "2025-03-08 11:00:00", "b": 1057.4}, {"a": "2025-03-08 11:05:00", "b": 1122.4}, {"a": "2025-03-08 11:10:00", "b": 1153.8}, {"a": "2025-03-08 11:15:00", "b": 1037.6}, {"a": "2025-03-08 11:20:00", "b": 976.6}, {"a": "2025-03-08 11:25:00", "b": 972.8}, {"a": "2025-03-08 11:30:00", "b": 920.4}, {"a": "2025-03-08 11:35:00", "b": 901.0}, {"a": "2025-03-08 11:40:00", "b": 876.2}, {"a": "2025-03-08 11:45:00", "b": 847.6}, {"a": "2025-03-08 11:50:00", "b": 834.3333333333334}, {"a": "2025-03-08 11:55:00", "b": 823.8}, {"a": "2025-03-08 12:00:00", "b": 810.8}, {"a": "2025-03-08 12:05:00", "b": 804.0}, {"a": "2025-03-08 12:10:00", "b": 791.8}, {"a": "2025-03-08 12:15:00", "b": 768.5}, {"a": "2025-03-08 12:20:00", "b": 763.2}, {"a": "2025-03-08 12:25:00", "b": 776.25}, {"a": "2025-03-08 12:30:00", "b": 793.2}, {"a": "2025-03-08 12:35:00", "b": 820.6}, {"a": "2025-03-08 12:40:00", "b": 836.6}, {"a": "2025-03-08 12:45:00", "b": 854.75}, {"a": "2025-03-08 12:50:00", "b": 856.6}, {"a": "2025-03-08 12:55:00", "b": 849.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    