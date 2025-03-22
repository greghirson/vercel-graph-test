
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-22 08:00:00", "b": 668.25}, {"a": "2025-03-22 08:05:00", "b": 669.8}, {"a": "2025-03-22 08:10:00", "b": 670.8}, {"a": "2025-03-22 08:15:00", "b": 675.0}, {"a": "2025-03-22 08:20:00", "b": 674.25}, {"a": "2025-03-22 08:25:00", "b": 668.6}, {"a": "2025-03-22 08:30:00", "b": 669.5}, {"a": "2025-03-22 08:35:00", "b": 683.8}, {"a": "2025-03-22 08:40:00", "b": 690.8}, {"a": "2025-03-22 08:45:00", "b": 685.6666666666666}, {"a": "2025-03-22 08:50:00", "b": 678.0}, {"a": "2025-03-22 08:55:00", "b": 677.8}, {"a": "2025-03-22 09:00:00", "b": 701.8}, {"a": "2025-03-22 09:05:00", "b": 737.0}, {"a": "2025-03-22 09:10:00", "b": 746.2}, {"a": "2025-03-22 09:15:00", "b": 765.2}, {"a": "2025-03-22 09:20:00", "b": 768.75}, {"a": "2025-03-22 09:25:00", "b": 762.4}, {"a": "2025-03-22 09:30:00", "b": 753.8}, {"a": "2025-03-22 09:35:00", "b": 763.2}, {"a": "2025-03-22 09:40:00", "b": 743.8}, {"a": "2025-03-22 09:45:00", "b": 733.25}, {"a": "2025-03-22 09:50:00", "b": 749.4}, {"a": "2025-03-22 09:55:00", "b": 742.2}, {"a": "2025-03-22 10:00:00", "b": 735.25}, {"a": "2025-03-22 10:05:00", "b": 730.5}, {"a": "2025-03-22 10:10:00", "b": 741.0}, {"a": "2025-03-22 10:15:00", "b": 749.2}, {"a": "2025-03-22 10:20:00", "b": 749.8}, {"a": "2025-03-22 10:25:00", "b": 772.6}, {"a": "2025-03-22 10:30:00", "b": 785.0}, {"a": "2025-03-22 10:35:00", "b": 796.8}, {"a": "2025-03-22 10:40:00", "b": 772.4}, {"a": "2025-03-22 10:45:00", "b": 763.6}, {"a": "2025-03-22 10:50:00", "b": 770.2}, {"a": "2025-03-22 10:55:00", "b": 765.4}, {"a": "2025-03-22 11:00:00", "b": 752.2}, {"a": "2025-03-22 11:05:00", "b": 739.4}, {"a": "2025-03-22 11:10:00", "b": 728.75}, {"a": "2025-03-22 11:15:00", "b": 724.0}, {"a": "2025-03-22 11:20:00", "b": 724.5}, {"a": "2025-03-22 11:25:00", "b": 726.4}, {"a": "2025-03-22 11:30:00", "b": 718.2}, {"a": "2025-03-22 11:35:00", "b": 714.6666666666666}, {"a": "2025-03-22 11:40:00", "b": 713.0}, {"a": "2025-03-22 11:45:00", "b": 711.0}, {"a": "2025-03-22 11:50:00", "b": 708.0}, {"a": "2025-03-22 11:55:00", "b": 713.75}, {"a": "2025-03-22 12:00:00", "b": 718.8}, {"a": "2025-03-22 12:05:00", "b": 716.5}, {"a": "2025-03-22 12:10:00", "b": 712.4}, {"a": "2025-03-22 12:15:00", "b": 715.75}, {"a": "2025-03-22 12:20:00", "b": 715.25}, {"a": "2025-03-22 12:25:00", "b": 708.25}, {"a": "2025-03-22 12:30:00", "b": 705.4}, {"a": "2025-03-22 12:35:00", "b": 710.3333333333334}, {"a": "2025-03-22 12:40:00", "b": 708.3333333333334}, {"a": "2025-03-22 12:45:00", "b": 705.4}, {"a": "2025-03-22 12:50:00", "b": 688.2}, {"a": "2025-03-22 12:55:00", "b": 683.5}, {"a": "2025-03-22 13:00:00", "b": 678.6}, {"a": "2025-03-22 13:05:00", "b": 655.2}, {"a": "2025-03-22 13:10:00", "b": 642.25}, {"a": "2025-03-22 13:15:00", "b": 631.8}, {"a": "2025-03-22 13:20:00", "b": 653.0}, {"a": "2025-03-22 13:25:00", "b": 657.0}, {"a": "2025-03-22 13:30:00", "b": 647.5}, {"a": "2025-03-22 13:35:00", "b": 649.6}, {"a": "2025-03-22 13:40:00", "b": 644.75}, {"a": "2025-03-22 13:45:00", "b": 637.5}, {"a": "2025-03-22 13:50:00", "b": 641.0}, {"a": "2025-03-22 13:55:00", "b": 632.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    