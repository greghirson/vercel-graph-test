
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-26 09:00:00", "b": 494.5}, {"a": "2025-01-26 09:05:00", "b": 468.0}, {"a": "2025-01-26 09:10:00", "b": 477.0}, {"a": "2025-01-26 09:15:00", "b": 508.4}, {"a": "2025-01-26 09:20:00", "b": 539.4}, {"a": "2025-01-26 09:25:00", "b": 585.4}, {"a": "2025-01-26 09:30:00", "b": 598.8}, {"a": "2025-01-26 09:35:00", "b": 744.2}, {"a": "2025-01-26 09:40:00", "b": 638.2}, {"a": "2025-01-26 09:45:00", "b": 594.8}, {"a": "2025-01-26 09:50:00", "b": 585.5}, {"a": "2025-01-26 09:55:00", "b": 593.0}, {"a": "2025-01-26 10:00:00", "b": 577.0}, {"a": "2025-01-26 10:05:00", "b": 568.4}, {"a": "2025-01-26 10:10:00", "b": 574.6}, {"a": "2025-01-26 10:15:00", "b": 574.0}, {"a": "2025-01-26 10:20:00", "b": 570.0}, {"a": "2025-01-26 10:25:00", "b": 564.2}, {"a": "2025-01-26 10:30:00", "b": 557.75}, {"a": "2025-01-26 10:35:00", "b": 559.0}, {"a": "2025-01-26 10:40:00", "b": 568.8}, {"a": "2025-01-26 10:45:00", "b": 575.75}, {"a": "2025-01-26 10:50:00", "b": 569.0}, {"a": "2025-01-26 10:55:00", "b": 578.0}, {"a": "2025-01-26 11:00:00", "b": 590.0}, {"a": "2025-01-26 11:05:00", "b": 567.8}, {"a": "2025-01-26 11:10:00", "b": 569.6}, {"a": "2025-01-26 11:15:00", "b": 552.2}, {"a": "2025-01-26 11:20:00", "b": 565.6}, {"a": "2025-01-26 11:25:00", "b": 589.5}, {"a": "2025-01-26 11:30:00", "b": 561.8}, {"a": "2025-01-26 11:35:00", "b": 557.0}, {"a": "2025-01-26 11:40:00", "b": 563.4}, {"a": "2025-01-26 11:45:00", "b": 561.2}, {"a": "2025-01-26 11:50:00", "b": 605.8}, {"a": "2025-01-26 11:55:00", "b": 637.8}, {"a": "2025-01-26 12:00:00", "b": 645.5}, {"a": "2025-01-26 12:05:00", "b": 630.8}, {"a": "2025-01-26 12:10:00", "b": 634.8}, {"a": "2025-01-26 12:15:00", "b": 644.75}, {"a": "2025-01-26 12:20:00", "b": 602.2}, {"a": "2025-01-26 12:25:00", "b": 617.4}, {"a": "2025-01-26 12:30:00", "b": 664.4}, {"a": "2025-01-26 12:35:00", "b": 646.75}, {"a": "2025-01-26 12:40:00", "b": 661.6}, {"a": "2025-01-26 12:45:00", "b": 686.8}, {"a": "2025-01-26 12:50:00", "b": 707.0}, {"a": "2025-01-26 12:55:00", "b": 735.6}, {"a": "2025-01-26 13:00:00", "b": 762.8}, {"a": "2025-01-26 13:05:00", "b": 748.75}, {"a": "2025-01-26 13:10:00", "b": 740.6}, {"a": "2025-01-26 13:15:00", "b": 723.8}, {"a": "2025-01-26 13:20:00", "b": 717.8}, {"a": "2025-01-26 13:25:00", "b": 685.4}, {"a": "2025-01-26 13:30:00", "b": 625.6}, {"a": "2025-01-26 13:35:00", "b": 633.5}, {"a": "2025-01-26 13:40:00", "b": 672.2}, {"a": "2025-01-26 13:45:00", "b": 693.4}, {"a": "2025-01-26 13:50:00", "b": 670.5}, {"a": "2025-01-26 13:55:00", "b": 664.6}, {"a": "2025-01-26 14:00:00", "b": 657.4}, {"a": "2025-01-26 14:05:00", "b": 642.75}, {"a": "2025-01-26 14:10:00", "b": 652.25}, {"a": "2025-01-26 14:15:00", "b": 657.0}, {"a": "2025-01-26 14:20:00", "b": 660.8}, {"a": "2025-01-26 14:25:00", "b": 656.5}, {"a": "2025-01-26 14:30:00", "b": 644.6}, {"a": "2025-01-26 14:35:00", "b": 650.4}, {"a": "2025-01-26 14:40:00", "b": 631.0}, {"a": "2025-01-26 14:45:00", "b": 634.0}, {"a": "2025-01-26 14:50:00", "b": 645.2}, {"a": "2025-01-26 14:55:00", "b": 648.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    