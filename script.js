
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-31 03:00:00", "b": 762.4}, {"a": "2025-03-31 03:05:00", "b": 766.0}, {"a": "2025-03-31 03:10:00", "b": 760.25}, {"a": "2025-03-31 03:15:00", "b": 749.3333333333334}, {"a": "2025-03-31 03:20:00", "b": 748.6666666666666}, {"a": "2025-03-31 03:25:00", "b": 752.0}, {"a": "2025-03-31 03:30:00", "b": 758.25}, {"a": "2025-03-31 03:35:00", "b": 769.8}, {"a": "2025-03-31 03:40:00", "b": 770.0}, {"a": "2025-03-31 03:45:00", "b": 755.4}, {"a": "2025-03-31 03:50:00", "b": 754.0}, {"a": "2025-03-31 03:55:00", "b": 760.0}, {"a": "2025-03-31 04:00:00", "b": 751.6}, {"a": "2025-03-31 04:05:00", "b": 752.25}, {"a": "2025-03-31 04:10:00", "b": 753.75}, {"a": "2025-03-31 04:15:00", "b": 759.0}, {"a": "2025-03-31 04:20:00", "b": 761.6}, {"a": "2025-03-31 04:25:00", "b": 750.8}, {"a": "2025-03-31 04:30:00", "b": 725.8}, {"a": "2025-03-31 04:35:00", "b": 698.6}, {"a": "2025-03-31 04:40:00", "b": 703.2}, {"a": "2025-03-31 04:45:00", "b": 710.6666666666666}, {"a": "2025-03-31 04:50:00", "b": 714.75}, {"a": "2025-03-31 04:55:00", "b": 698.0}, {"a": "2025-03-31 05:00:00", "b": 709.8}, {"a": "2025-03-31 05:05:00", "b": 719.6}, {"a": "2025-03-31 05:10:00", "b": 709.75}, {"a": "2025-03-31 05:15:00", "b": 702.6}, {"a": "2025-03-31 05:20:00", "b": 698.4}, {"a": "2025-03-31 05:25:00", "b": 695.75}, {"a": "2025-03-31 05:30:00", "b": 692.8}, {"a": "2025-03-31 05:35:00", "b": 686.5}, {"a": "2025-03-31 05:40:00", "b": 682.25}, {"a": "2025-03-31 05:45:00", "b": 667.4}, {"a": "2025-03-31 05:50:00", "b": 675.3333333333334}, {"a": "2025-03-31 05:55:00", "b": 660.0}, {"a": "2025-03-31 06:00:00", "b": 648.4}, {"a": "2025-03-31 06:05:00", "b": 662.0}, {"a": "2025-03-31 06:10:00", "b": 654.6666666666666}, {"a": "2025-03-31 06:15:00", "b": 650.5}, {"a": "2025-03-31 06:20:00", "b": 667.4}, {"a": "2025-03-31 06:25:00", "b": 674.5}, {"a": "2025-03-31 06:30:00", "b": 662.6666666666666}, {"a": "2025-03-31 06:35:00", "b": 664.4}, {"a": "2025-03-31 06:40:00", "b": 665.75}, {"a": "2025-03-31 06:45:00", "b": 669.0}, {"a": "2025-03-31 06:50:00", "b": 674.6}, {"a": "2025-03-31 06:55:00", "b": 678.6}, {"a": "2025-03-31 07:00:00", "b": 683.0}, {"a": "2025-03-31 07:05:00", "b": 705.2}, {"a": "2025-03-31 07:10:00", "b": 717.4}, {"a": "2025-03-31 07:15:00", "b": 713.8}, {"a": "2025-03-31 07:20:00", "b": 710.2}, {"a": "2025-03-31 07:25:00", "b": 699.6666666666666}, {"a": "2025-03-31 07:30:00", "b": 701.4}, {"a": "2025-03-31 07:35:00", "b": 693.2}, {"a": "2025-03-31 07:40:00", "b": 691.0}, {"a": "2025-03-31 07:45:00", "b": 703.0}, {"a": "2025-03-31 07:50:00", "b": 714.25}, {"a": "2025-03-31 07:55:00", "b": 723.0}, {"a": "2025-03-31 08:00:00", "b": 726.75}, {"a": "2025-03-31 08:05:00", "b": 736.75}, {"a": "2025-03-31 08:10:00", "b": 747.0}, {"a": "2025-03-31 08:15:00", "b": 751.8}, {"a": "2025-03-31 08:20:00", "b": 739.0}, {"a": "2025-03-31 08:25:00", "b": 752.8}, {"a": "2025-03-31 08:30:00", "b": 755.2}, {"a": "2025-03-31 08:35:00", "b": 748.4}, {"a": "2025-03-31 08:40:00", "b": 744.8}, {"a": "2025-03-31 08:45:00", "b": 748.4}, {"a": "2025-03-31 08:50:00", "b": 754.2}, {"a": "2025-03-31 08:55:00", "b": 749.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    